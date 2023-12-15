import { Router } from "express"
import { getAllLawyer, getDetailLawyer } from "../controllers/lawyerController"
import { AuthMiddleware } from '@/middleware/middleware'

const router: Router = Router()

//TODO: get all lawyer
router.get("/lawyers", AuthMiddleware, getAllLawyer)

//Todo: det Detail lawyer
router.get("/lawyers/:id", AuthMiddleware, getDetailLawyer)

export default router