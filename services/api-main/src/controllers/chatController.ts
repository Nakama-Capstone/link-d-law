import { Request, Response } from 'express'
import { db } from '../connection/database'
import { RequestAuthMiddleware } from '@/middleware/middleware'

const getAllUserChat = async (req: Request, res: Response) => {
    const { auth } = req as RequestAuthMiddleware
    res.json({
        ok: true,
        message: "Success get all user chat",
        data: await db.chat.findMany({
            where: {
                OR: [
                    {
                        user1_id: auth.user.id
                    },
                    {
                        user2_id: auth.user.id
                    }
                ]
            }
        })
    })
}

const getAllMessage = async (req: Request, res: Response) => {
    const { id } = req.params
    const { auth } = req as RequestAuthMiddleware

    const chat = await db.chat.findFirst({
        where: {
            id: parseInt(id)
        }
    })

    if (chat?.user1_id == auth.user.id || chat?.user2_id == auth.user.id) {
        res.status(400).json({
            ok: true,
            message: "Success get all message",
            data: await db.message.findMany({
                where: {
                    chatId: parseInt(id)
                }
            })
        })
    }

    res.status(400).json({
        ok: false,
        message: "Failed get all message"
    })
}

const sendMessage = async (req: Request, res: Response) => {
    const { id } = req.params
    const { message, to } = req.body
    const { auth } = req as RequestAuthMiddleware

    const chat = await db.chat.findFirst({
        where: {
            id: parseInt(id)
        }
    })

    if (chat?.user1_id == auth.user.id || chat?.user2_id == auth.user.id) {
        await db.message.create({
            data: {
                chatId: parseInt(id),
                from: auth.user.id,
                to: parseInt(to),
                message: message
            }
        })

        res.json({
            ok: true,
            message: "Success send message",
        })
    }

    res.json({
        ok: true,
        message: "Failed send message",
    })
}

const newChat = async (req: Request, res: Response) => {
    const { auth } = req as RequestAuthMiddleware
    const { user2_id } = req.body

    // Check whether the chat already exists before
    const chat = await db.chat.findFirst({
        where: {
            OR: [
                {
                    user1_id: auth.user.id, user2_id: user2_id
                },
                {
                    user1_id: user2_id, user2_id: auth.user.id
                }
            ]
        }
    })

    if (chat) {
        res.json({
            ok: false,
            message: "Chat is available",
            data: {
                chatId: chat.id
            }
        })
    }

    const newChat = await db.chat.create({
        data: {
            user1_id: auth.user.id,
            user2_id: user2_id
        }
    })

    res.json({
        ok: true,
        message: "Success create new chat",
        data: {
            chatId: newChat.id
        }
    })
}

export { getAllUserChat, getAllMessage, sendMessage, newChat }