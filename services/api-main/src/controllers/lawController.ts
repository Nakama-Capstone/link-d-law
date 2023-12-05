import { Request, Response } from 'express'
import { db } from '../connection/database'

const getAllLaw = async (req: Request, res: Response) => {
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
}

const getAllPasalFromLaw = async (req: Request, res: Response) => {
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
}

const getDetailPasal = async (req: Request, res: Response) => {
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
}

export { getAllLaw, getAllPasalFromLaw, getDetailPasal }