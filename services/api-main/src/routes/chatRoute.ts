import { Router } from 'express'
import { getAllMessage, getAllUserChat, newChat, sendMessage } from '../controllers/chatController'
import { AuthMiddleware } from '@/middleware/middleware'

const router: Router = Router()

//TODO: get all user chat
router.get("/chats", AuthMiddleware, getAllUserChat)

//TODO: get all message
router.get("/chats/:id", AuthMiddleware, getAllMessage)

//TODO: send message
router.post("/chats/:id", AuthMiddleware, sendMessage)

//TODO: create new chat
router.post("/chats", AuthMiddleware, newChat)

export default router