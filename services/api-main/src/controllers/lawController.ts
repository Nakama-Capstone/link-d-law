import { Request, Response } from 'express'
import { db } from '../connection/database'

const getAllLaw = async (req: Request, res: Response) => {
    try {
        res.json({
            ok: true,
            message: "success get all law",
            data: await db.law.findMany({
                include: {
                    LawBab: {
                        include: {
                            LawData: true
                        }
                    }
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

const getAllPasalFromLaw = async (req: Request, res: Response) => {
    try {
        const { law } = req.params

        res.json({
            ok: true,
            message: "success get all pasal from law",
            data: await db.lawBab.findMany(
                {
                    include: {
                        LawData: true
                    },
                    where: {
                        lawId: parseInt(law)
                    }
                }
            )
        })
    } catch (error) {
        res.status(400).json({
            ok: false,
            message: error
        })
    }
}

const getDetailPasal = async (req: Request, res: Response) => {
    try {
        const { law, pasal } = req.params

        res.json({
            ok: true,
            message: "success get all pasal from law",
            data: await db.lawBab.findMany(
                {
                    include: {
                        LawData: {
                            where: {
                                id: parseInt(pasal)
                            }
                        }
                    },
                    where: {
                        lawId: parseInt(law)
                    }
                }
            )
        })
    } catch (error) {
        res.status(400).json({
            ok: false,
            message: error
        })
    }
    
}

export { getAllLaw, getAllPasalFromLaw, getDetailPasal }