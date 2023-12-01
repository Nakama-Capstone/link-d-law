import { LoadConfigEnv, initPrisma, Password } from "@law-d-link/service"

// load config env
LoadConfigEnv()

// init prisma db
const db = initPrisma()

// user seeder
await db.user.create({
  data: {
    firstName: "Gojoh",
    middleName: undefined,
    lastName: "Santoso",
    email: "example1@mail.com",
    password: Password.hash("password"),
  }
})
await db.user.create({
  data: {
    firstName: "Uzumaki",
    middleName: undefined,
    lastName: "Udin",
    email: "example2@mail.com",
    password: Password.hash("password"),
  }
})

// law seeder
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

// done
console.log("seeding done")