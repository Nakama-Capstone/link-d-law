// import { redis } from "./redis"
import * as jose from "jose"

// const jwt_expiration = 60 * 10;
// const jwt_refresh_expiration = 60 * 60 * 24 * 30;

export async function generateToken(
  payload: {
    id: number
    [key: string]: string|number
  }
) {
  // 10 minutes in seconds
  // const accessTokenMaxAge = 60 * 10
  // 30 days in seconds
  // const refreshTokenMaxAge = 60 * 60 * 24 * 30

  const accessToken = await (new jose.SignJWT(payload))
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuedAt()
    .setExpirationTime('10m')
    .sign(Buffer.from(process.env.JWT_SECRET || ''))
  
  // TODO: @feat/refresh-token
  // const refreshToken = await (new jose.SignJWT(payload))
  //   .setProtectedHeader({ alg: 'HS256' })
  //   .setIssuedAt()
  //   .setExpirationTime('30d')
  //   .sign(Buffer.from(process.env.JWT_SECRET || ''))

  // TODO: @feat/refresh-token
  // // save to redis
  // await redis.set(`auth_refresh_token:${payload.id}`, JSON.stringify({
  //   refreshToken,
  //   expires: Date.now() + refreshTokenMaxAge * 1000
  // }))

  return {
    accessToken,
    // refreshToken
  }
}

export async function verifyToken(jwt: string) {
  const verified = await jose.jwtVerify(jwt, Buffer.from(process.env.JWT_SECRET || ''), {
    algorithms: ['HS256']
  });
  return verified;
}