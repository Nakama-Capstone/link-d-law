import { Router } from 'express'
import { getAllMessage, getAllUserChat, sendMessage } from '../controllers/chatController'

const router: Router = Router()

//TODO: get all user chat
router.get("/chats", getAllUserChat)

//TODO: get all message
router.get("/chats/:id", getAllMessage)

//TODO: send message
router.post("/chats/:id", sendMessage)

export default router