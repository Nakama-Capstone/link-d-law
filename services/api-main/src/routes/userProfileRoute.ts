import { Router } from 'express'
import { getUserProfile, updateUserProfile } from '@/controllers/userController'
import { AuthMiddleware } from '@/middleware/middleware'

const router: Router = Router()

//TODO: get user profile
router.get("/profile", AuthMiddleware, getUserProfile)

//TODO: update user profile
router.put("/profile", AuthMiddleware, updateUserProfile)

export default router