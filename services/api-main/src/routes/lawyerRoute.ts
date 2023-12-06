import { Router } from "express";
import { getAllLawyer, getDetailLawyer } from "../controllers/lawyerController";

const router: Router = Router()

//TODO: get all lawyer
router.get("/lawyers", getAllLawyer)

//Todo: det Detail lawyer
router.get("/lawyers/:id", getDetailLawyer)

export default router