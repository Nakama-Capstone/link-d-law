import { createClient } from "redis"

export const redis = createClient({
  // username: process.env.REDIS_USERNAME,
  // password: process.env.REDIS_PASSWORD,
  socket: {
    host: process.env.REDIS_HOST,
    port: process.env.REDIS_PORT ? Number(process.env.REDIS_PORT) : 6379,
  }
})

redis.connect()