import { Request, Response } from 'express'
import { db } from '../connection/database'

const getAllUserChat = async (req: Request, res: Response) => {
    res.json({
        ok: true,
        message: "Success get all user chat",
        data: await db.chat.findMany()
    })
}

const getAllMessage = async (req: Request, res: Response) => {
    const { id } = req.params
    res.json({
        ok: true,
        message: "Success get all message",
        data: await db.message.findMany({
            where: {
                chatId: parseInt(id)
            }
        })
    })
}

const sendMessage = async (req: Request, res: Response) => {
    const { id } = req.params

    const { message, from, to } = req.body

    const sendingMessage = await db.message.create({
        data: {
            chatId: parseInt(id),
            from: parseInt(from),
            to: parseInt(to),
            message: message,
        }
    })

    res.json({
        ok: true,
        message: "Success get all message",
        data: ""
    })
}

export { getAllUserChat, getAllMessage, sendMessage }