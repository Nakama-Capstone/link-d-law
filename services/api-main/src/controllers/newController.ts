/* eslint-disable no-console */
import { Request, Response } from 'express'
import Parser from 'rss-parser'
import Readability from "@/libs/Readability"
import jsdom from "jsdom"
import dayjs from "dayjs"
import relativeTime from "dayjs/plugin/relativeTime"
dayjs.extend(relativeTime)


export const RSS_REGISTERS = [
  'https://www.kemenkumham.go.id/rss/rss-newskumham',
  'https://www.kemenkumham.go.id/rss/rss-siaranperskumham',
  'https://www.kemenkumham.go.id/rss/rss-narasitunggal',
]

export const RssCache = {
  news: [] as {
    link: string,
    rssurl: string,
    title: string,
    content: string,
    date: dayjs.Dayjs,
    image?: string,
  }[],
  lastUpdate: 0,
  config: {
    // per 1 minutes
    interval: 60 * 1000,
    perRssItem: 5,
  },
  async updateNews() {

    // check if last update is less than interval
    if (Date.now() - this.lastUpdate < this.config.interval) return

    // update last update
    this.lastUpdate = Date.now()

    for (const rssurl of RSS_REGISTERS) {
      const parser = new Parser()
      const feed = await parser.parseURL(rssurl)
      let count = 0
      for (const item of feed.items) {
        if (count > this.config.perRssItem) continue
        // console.log('item', ite)
        try {
          const article = this.parseHTML(item.content || '')
          if (!article && this.news.find(item => item.link === item.link)) continue
          this.news.push({
            link: item.link || '',
            rssurl,
            content: article?.textContent || '',
            title: item.title || article?.title || '',
            date: dayjs(item.isoDate || item.pubDate || ''),
            image: article?.img || undefined,
          })
          count++
        // eslint-disable-next-line no-empty
        } catch (error) {}
      }
    }

    // sort by date
    this.news.sort((a, b) => b.date.unix() - a.date.unix())
  },
  async getNews() {
    try {
      await this.updateNews()
      return this.news
    } catch (error) {
      return []
    }
  },
  parseHTML(data: string) {
    const dom = new jsdom.JSDOM(data, {})
    // log.info("html parsed to dom")/
    const reader = new Readability(
      {
        spec: dom.window.location.href,
        host: dom.window.location.host,
        prePath: dom.window.location.protocol + '//' + dom.window.location.host,
        scheme: dom.window.location.protocol.substr(0, dom.window.location.protocol.indexOf(':')),
        pathBase:
          dom.window.location.protocol +
          '//' +
          dom.window.location.host +
          dom.window.location.pathname.substr(0, dom.window.location.pathname.lastIndexOf('/') + 1),
      } as any,
      dom.window.document.cloneNode(true),
    )
    const article = reader.parse()
    return {
      ...article,
      img: dom.window.document.querySelector('img')?.getAttribute('src')
    }
  }
}

export const getNews = async (req: Request, res: Response) => {
  const data = await RssCache.getNews()
  try {
    return res.json({
      ok: true,
      message: 'news list',
      data: data.map(item => ({
        ...item,
        date: item.date.format('YYYY-MM-DD HH:mm:ss'),
        dateHuman: item.date.fromNow(),
      })),
      lastUpdate: RssCache.lastUpdate,
      lastUpdateHuman: (Date.now() - RssCache.lastUpdate) / 1000 + ' seconds ago',
    })
  } catch (error) {
    return res.json({
      ok: false,
      message: 'news list',
      data: [],
    })
  }
}