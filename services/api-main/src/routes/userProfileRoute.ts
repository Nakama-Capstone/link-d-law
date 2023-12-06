import { Router } from 'express'
import { getUserProfile } from '../controllers/userController'

const router: Router = Router()

//TODO: get user profile
router.get("/profile", getUserProfile)

export default router