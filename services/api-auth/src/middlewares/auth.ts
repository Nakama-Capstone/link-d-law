import { getUserFromRequest } from '@/funcs'
import express from 'express'
import { JWTPayload, JWTVerifyResult } from 'jose'

export interface AuthExpressRequest extends express.Request {
  auth: {
    user: {
      id: number
      email: string
    }
    jwt: JWTVerifyResult<JWTPayload>
    token: {
      accessToken: string
    }
  }
}

export const AuthMiddleware = async (req: AuthExpressRequest|express.Request, res: express.Response, next: express.NextFunction) => {
  try {
    const { user, jwt, token } = await getUserFromRequest(req)
    Object.defineProperty(req, 'auth', {
      value: {
        user,
        jwt,
        token,
      },
      writable: true,
    })
  } catch (error) {
    return res.status(401).json({
      ok: false,
      message: "unauthorized",
      errors: [
        {
          message: (error as any)?.message || `${error}`,
        }
      ]
    })
  }

  next()
}