import { Router } from "express"
import { getAllLawyer, getDetailLawyer, getTopLawyer } from "../controllers/lawyerController"
import { AuthMiddleware } from '@/middleware/middleware'

const router: Router = Router()

//TODO: get all lawyer
router.get("/lawyers", AuthMiddleware, getAllLawyer)

//Todo: get top lawyer
router.get("/lawyers/top", AuthMiddleware, getTopLawyer)

//Todo: get Detail lawyer
router.get("/lawyers/:id", AuthMiddleware, getDetailLawyer)

export default router