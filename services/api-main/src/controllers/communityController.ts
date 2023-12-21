import { Request, Response } from 'express'
import { db } from '../connection/database'
import { RequestAuthMiddleware } from '@/middleware/middleware'

const getAllPost = async (req: Request, res: Response) => {
    try {    
        const data = await db.post.findMany({
            include: {
                _count: {
                    select: {
                        PostComment: true
                    }
                }
            }
        })

        res.json({
            ok: true,
            message: "Success get all post",
            data
        })
    } catch (error) {
        res.status(400).json({
            ok: false,
            message: error
        })
    }
}

const uploadPost = async (req: Request, res: Response) => {
    try {
        const { auth } = req as RequestAuthMiddleware
        const {title, content } = req.body

        const newPost = await db.post.create({
            data: {
                title: title,
                content: content,
                userId: auth.user.id
            }
        })

        res.json({
            ok: true,
            message: "success create post",
            data: newPost
        })
    } catch (error) {
        res.status(400).json({
            ok: false,
            message: error
        })
    }
}

const getAllComment = async (req: Request, res: Response) => {
    try {
        const { id } = req.params

        const comments = await db.postComment.findMany({
            where: {
                postId: parseInt(id)
            }
        })

        res.json({
            ok: true,
            message: "Success get all comment from post",
            data: comments
        })
    } catch (error) {
        res.status(400).json({
            ok: false,
            message: error
        })
    }
}

const uploadComment = async (req: Request, res: Response) => {
    try {
        const { auth } = req as RequestAuthMiddleware
        const { id } = req.params
        const { content } = req.body

        const newComment = await db.postComment.create({
            data: {
                postId: parseInt(id),
                userId: auth.user.id,
                content: content
            }
        })

        res.json({
            ok: true,
            message: "Success create comment",
            data: newComment
        })
    } catch (error) {
        res.status(400).json({
            ok: false,
            message: error
        })
    }
}

export { getAllPost, uploadPost, getAllComment, uploadComment }