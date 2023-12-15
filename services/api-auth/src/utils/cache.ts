import { createClient } from "redis"

export const cache = createClient({
  // username: process.env.cache_USERNAME,
  // password: process.env.REDIS_PASSWORD,
  socket: {
    host: process.env.REDIS_HOST,
    port: process.env.REDIS_PORT ? Number(process.env.REDIS_PORT) : 6379,
  }
})