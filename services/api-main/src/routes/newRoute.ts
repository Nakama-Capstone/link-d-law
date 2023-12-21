import { getNewDetail, getNews } from '@/controllers/newController'
import { Router } from 'express'

const router: Router = Router()

router.get('/news', getNews)

router.get('/news/detail', getNewDetail)

export default router