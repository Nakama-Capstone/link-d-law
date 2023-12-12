import { PrismaClient } from '@prisma/client'

export const initPrisma = (DATABASE_URL?: string) => {
  const db = new PrismaClient({
    datasources: {
      db: {
        url: DATABASE_URL || process.env.DATABASE_URL,
      }
    }
  })
  return db
}