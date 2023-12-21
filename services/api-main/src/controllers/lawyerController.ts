import { Request, Response } from 'express'
import { db } from '../connection/database'

const getAllLawyer = async (req: Request, res: Response) => {
    try {
        // get all user with have lawyer reelation
        const data = await db.lawyer.findMany({
            include: {
                educationalBackground: true,
                firmaHukum: true,
                User: true
            }
        })
        res.json({
            ok: true,
            message: "Success get all lawyers",
            data
        })
    } catch (error) {
        res.status(400).json({
            ok: false,
            message: error
        })
    }
}

const getDetailLawyer = async (req: Request, res: Response) => {
    try {
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
                    firmaHukum: true,
                    User: true
                }
            })
        })
    } catch (error) {
        res.status(400).json({
            ok: false,
            message: error
        })
    }
}

export { getAllLawyer, getDetailLawyer }