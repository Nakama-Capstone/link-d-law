import { getNews } from '@/controllers/newController'
import { Router } from 'express'

const router: Router = Router()

router.get('/news', getNews)

export default router