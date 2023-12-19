// import { redis } from "./redis"
import express from "express"
import * as jose from "jose"
import { AuthUnauthorizedError } from "@/errors/auth"
import { isUserTokenValid } from "@/utils/store"
import { db } from "./utils/db"
import { exceptObjectKeys } from "./utils/obj"

// const jwt_expiration = 60 * 10;
// const jwt_refresh_expiration = 60 * 60 * 24 * 30;

export async function generateToken(
  payload: {
    id: number
    [key: string]: string|number
  }
) {
  // 10 minutes in seconds
  const accessTokenMaxAge = 60 * 864000 * 10
  // 1 days in seconds
  const refreshTokenMaxAge = 60 * 60 * 24 * 100

  const accessToken = await (new jose.SignJWT(payload))
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuedAt()
    .setExpirationTime('100d')
    .sign(Buffer.from(process.env.JWT_SECRET || ''))
  
  // TODO: @feat/refresh-token
  const refreshToken = await (new jose.SignJWT(payload))
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuedAt()
    .setExpirationTime('100d')
    .sign(Buffer.from(process.env.JWT_SECRET || ''))

  // TODO: @feat/refresh-token
  // // save to redis
  // await redis.set(`auth_refresh_token:${payload.id}`, JSON.stringify({
  //   refreshToken,
  //   expires: Date.now() + refreshTokenMaxAge * 1000
  // }))

  return {
    accessToken,
    refreshToken,
    accessTokenMaxAge,
    refreshTokenMaxAge,
  }
}

export async function verifyToken(jwt: string) {
  const verified = await jose.jwtVerify(jwt, Buffer.from(process.env.JWT_SECRET || ''), {
    algorithms: ['HS256']
  });
  return verified;
}

export const getUserTokenFromRequest = (req: express.Request) => {
  return {
    accessToken: req.query.token as string || req.headers.authorization?.split(" ")[1] || ""
  }
}

export async function getUserFromRequest(req: express.Request) {
  const token = getUserTokenFromRequest(req)
  if (!token) throw (new AuthUnauthorizedError('token not found'))

  // verify token from jwt
  let verified 
  try {
    verified = await verifyToken(token.accessToken)
    if (!verified) throw new AuthUnauthorizedError('cant verify token')

    // verify token from cache
    try {
      const valid = await isUserTokenValid(verified.payload.id as number, token.accessToken)
      if (!valid) throw new AuthUnauthorizedError('token is expired')

      // get user
      const user = await db.user.findUnique({
        where: {
          id: verified.payload.id as number
        }
      })
      if (!user) throw new AuthUnauthorizedError('user not found')

      return {
        jwt: verified,
        token,
        user: exceptObjectKeys(user, ['password']),
      }
    } catch (error) {
      throw new AuthUnauthorizedError("failed to verify token expiration")
    }
  } catch (error) {
    throw new AuthUnauthorizedError("signature verification failed")
  }
}