import { Request, Response } from 'express'
import { initPrisma } from "@law-d-link/service"

// const db = initPrisma()

const getUserProfile =async (req: Request, res: Response) => {
    res.json({
        ok: true,
        message: "Success get user profile",
        data: "data"
    })
}

export { getUserProfile }