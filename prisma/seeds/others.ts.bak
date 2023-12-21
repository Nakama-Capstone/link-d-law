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

// chat seeder
await db.chat.create({
  data: {
    user1_id: 1,
    user2_id: 2,
  }
})

// message seeder
await db.message.create({
  data: {
    chatId: 1,
    from: 1,
    to: 2,
    message: "hallo apa kabar ?",
  }
})
await db.message.create({
  data: {
    chatId: 1,
    from: 2,
    to: 1,
    message: "kabar baik, luar biasa",
  }
})

// lawyer seeder
await db.lawyer.create({
  data: {
    name: "hotman paris",
    specialist: "hukum bisnis internasional",
    rate: 10,
    nomorPerandi: "007",
    image: "https://israilrahmatullah.files.wordpress.com/2018/09/biografi-hotman-paris-hutapea.jpg?w=584",
    fee: 1000000000
  }
})

// educational background seeder
await db.educationalBackground.create({
  data: {
    lawyerId: 1,
    university: "Universitas Teknologi Sydney",
    major: "Master of Law"
  }
})
await db.educationalBackground.create({
  data: {
    lawyerId: 1,
    university: "Universitas Katolik Parahyangan",
    major: "Sarjana Hukum"
  }
})

// firma hukum seeder
await db.firmaHukum.create({
  data: {
    lawyerId: 1,
    name: "firma Australia"
  }
})

// done
console.log("seeding done")