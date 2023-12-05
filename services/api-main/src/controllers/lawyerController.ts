import { Request, Response } from 'express'
import { db } from '../connection/database'

const getAllLawyer = async (req: Request, res: Response) => {
    res.json({
        ok: true,
        message: "Success get all lawyers",
        data: await db.lawyer.findMany()
    })
}

const getDetailLawyer = async (req: Request, res: Response) => {
    const { id } = req.params

    res.json({
        ok: true,
        message: "success get detail lawyer",
        data: await db.lawyer.findUnique({
            where: {
                id: parseInt(id)
            },
            include: {
                educationalBackground: true,
                firmaHukum: true
            }
        })
    })
}

export { getAllLawyer, getDetailLawyer }