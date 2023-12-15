import { Router } from 'express'
import { getAllMessage, getAllUserChat, sendMessage } from '../controllers/chatController'
import { AuthMiddleware } from '@/middleware/middleware'

const router: Router = Router()

//TODO: get all user chat
router.get("/chats", AuthMiddleware, getAllUserChat)

//TODO: get all message
router.get("/chats/:id", AuthMiddleware, getAllMessage)

//TODO: send message
router.post("/chats/:id", AuthMiddleware, sendMessage)

export default router