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

const getTopLawyer = async (req: Request, res: Response) => {
    try {
        // get top lawyer
        const data = await db.lawyer.findMany({
            include: {
                User: {
                    select: {
                        id: true,
                        firstName: true,
                        middleName: true,
                        lastName: true,
                        email: true,
                        image: true
                    }
                }
            },
            orderBy: {
                rate: "desc"
            },
            take: 3
        })
        res.json({
            ok: true,
            message: "Success get top lawyers",
            data
        })
    } catch (error) {
        res.status(400).json({
            ok: false,
            message: error,
            test: "kesini"
        })
    }
}

export { getAllLawyer, getDetailLawyer, getTopLawyer }