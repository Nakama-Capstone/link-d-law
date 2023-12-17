import { Request, Response } from 'express'
import { RequestAuthMiddleware } from '@/middleware/middleware'
import { db } from "@/connection/database";
import { Password, validateWithZod } from '@law-d-link/service';
import { userUpdateSchema } from "@law-d-link/schema"

const getUserProfile = async (req: Request, res: Response) => {
    const { auth } = req as RequestAuthMiddleware

    const userData = await db.user.findFirst({
        where: {
            id: auth.user.id
        }
    })

    if (userData) {
        res.json({
            ok: true,
            message: "Success get user profile",
            data: userData,
        })
    }

    res.json({
        ok: false,
        message: "Failed get user profile",
    })
}

const updateUserProfile = async (req: Request, res: Response) => {
    const { auth } = req as RequestAuthMiddleware
    const { firstName, middleName, lastName, email, password, image } = req.body
    
    // validate user data
    const validated = validateWithZod(userUpdateSchema, req.body)
    if (validated.isError) return res.status(400).json({
        ok: false,
        message: "validation error",
        errors: validated.errors,
    })

    if (password) {
        const hashedPassword = Password.hash(password)
        const updateData = await db.user.update({
            where: {
                id: auth.user.id
            },
            data: {
                firstName: firstName,
                middleName: middleName,
                lastName: lastName,
                email: email,
                password: hashedPassword,
                image: image
            }
        })
    
        res.status(200).json({
            ok: true,
            message: "Success update user profile",
            data: updateData
        })
    } else {
        const updateData = await db.user.update({
            where: {
                id: auth.user.id
            },
            data: {
                firstName: firstName,
                middleName: middleName,
                lastName: lastName,
                email: email,
                image: image
            }
        })
    
        res.status(200).json({
            ok: true,
            message: "Success update user profile",
            data: updateData
        })
    }

    res.status(400).json({
        ok: false,
        message: "Failed update user profile"
    })
}

export { getUserProfile, updateUserProfile }