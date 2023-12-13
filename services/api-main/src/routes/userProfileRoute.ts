import { Router } from 'express'
import { getUserProfile, updateUserProfile } from '@/controllers/userController'
import { AuthMiddleware, RequestAuthMiddleware } from '@/middleware/middleware'

const router: Router = Router()

//TODO: get user profile
router.get("/profile", AuthMiddleware, getUserProfile)
router.put("/profile", AuthMiddleware, updateUserProfile)

export default router