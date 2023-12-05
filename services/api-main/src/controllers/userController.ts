import { Request, Response } from 'express'

const getUserProfile =async (req: Request, res: Response) => {
    res.json({
        ok: true,
        message: "Success get user profile",
        data: "data"
    })
}

export { getUserProfile }