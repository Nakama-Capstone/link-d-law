import path from 'path';
import { PrismaClient } from "@prisma/client"
import dotenv from "dotenv"

dotenv.config({
  path: path.resolve(__dirname, '../../.env'),
});
const db = new PrismaClient({
  datasources: {
    db: {
      url: process.env.DATABASE_URL,
    }
  }
});

await db.law.create({
  data: {
    title: "Kitab Hukum Perdata",
    description: "Kitab Hukum Perdata adalah kitab hukum yang mengatur mengenai hukum perdata",
    LawBab: {
      create: {
        name: "Bab I",
        LawData: {
          create: [
            { pasal: '1', content: 'isi dari pasal 1' },
            { pasal: '2', content: 'isi dari pasal 2' },
            { pasal: '3', content: 'isi dari pasal 3' },
          ]
        }
      }
    }
  },
})

console.log("Seeding completed");