import { Router } from 'express'
import { AuthMiddleware } from '@/middleware/middleware'
import { getAllComment, getAllPost, uploadComment, uploadPost } from '@/controllers/communityController'

const router: Router = Router()

//TODO: get all post
router.get("/posts", AuthMiddleware, getAllPost)

//TODO: upload postingan
router.post("/posts", AuthMiddleware, uploadPost)

//TODO: get all comment from post
router.get("/posts/:id/comments", AuthMiddleware, getAllComment)

//TODO: upload comment
router.post("/posts/:id/comments", AuthMiddleware, uploadComment)

export default router