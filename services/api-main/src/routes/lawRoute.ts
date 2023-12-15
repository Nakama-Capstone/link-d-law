import { Router } from 'express'
import { getAllLaw, getAllPasalFromLaw, getDetailPasal } from '../controllers/lawController'
import { AuthMiddleware } from '@/middleware/middleware'

const router: Router = Router()

//TODO: get all law
router.get("/laws", AuthMiddleware, getAllLaw)

//TODO: get all pasal from law
router.get("/laws/:law", AuthMiddleware, getAllPasalFromLaw)

//TODO: get detail pasal
router.get("/laws/:law/:pasal", AuthMiddleware, getDetailPasal)

export default router