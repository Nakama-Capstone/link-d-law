/* eslint-disable no-console */
import { Password } from "../../packages/services/src/utils/password"
import { PrismaClient } from "../../prisma/prisma-client"
import { faker } from "@faker-js/faker"
import { parse } from "csv-parse"
import fs from "fs"
import path from "path"


// Read and process the CSV file
const processFile = async (p: string) => {
  const records = [];
  const parser = fs
    .createReadStream(p)
    .pipe(parse({
      // example data to parse is : "Pasal 1", "Isi dari pasal 1"
      delimiter: ",",
      columns: false,
      skipEmptyLines: true,
      trim: true,
      autoParse: true,
    }));
  for await (const record of parser) {
    // Work with each record
    records.push(record);
  }
  return records;
};



// init prisma db
const db = new PrismaClient({
  datasources: {
    db: {
      url: process.env.DATABASE_URL,
    }
  }
});


// seed
console.log("Seeding user...")
if (!await db.user.findFirst({ where: { email: "example1@mail.com" } })) await db.user.create({
  data: {
    firstName: "Gojoh",
    middleName: undefined,
    lastName: "Santoso",
    email: "example1@mail.com",
    password: Password.hash("password"),
  }
})
if (!await db.user.findFirst({ where: { email: "example2@mail.com" } })) await db.user.create({
  data: {
    firstName: "Uzumaki",
    middleName: undefined,
    lastName: "Udin",
    email: "example2@mail.com",
    password: Password.hash("password"),
  }
})
if (parseInt(`${await db.lawyer.count()}`) < 10) {
  for (let i = 0; i < 10; i++) {
    await db.user.create({
      data: {
        firstName: faker.person.firstName(),
        middleName: undefined,
        lastName: faker.person.lastName(),
        email: faker.internet.email(),
        password: Password.hash("password"),
        image: faker.image.avatar(),
      }
    })
  }
}


// seed lawyer
console.log("Seeding lawyer...")
// create user with relation to lawyer table
if (parseInt(`${await db.lawyer.count()}`) < 50) {
  for (let i = 0; i < 50; i++) {
    await db.user.create({
      data: {
        email: faker.internet.email(),
        firstName: faker.person.firstName(),
        lastName: faker.person.lastName(),
        password: Password.hash("password"),
        Lawyer: {
          create: {
            // fee random between 100000 - 1000000
            fee: Math.floor(Math.random() * 1000000) + 100000,
            nomorPerandi: `${faker.number.bigInt()}`,
            // random between 0 - 5 float
            rate: Math.random() * 5,
            specialist: faker.lorem.words(3),
            educationalBackground: {
              createMany: {
                // looping depens random between 1 - 3
                data: Array.from({ length: Math.floor(Math.random() * 3) + 1 }).map(() => ({
                  major: faker.lorem.words(3),
                  university: faker.lorem.words(3),
                }))
              }
            },
            firmaHukum: {
              // looping depens random between 1 - 2
              createMany: {
                data: Array.from({ length: Math.floor(Math.random() * 2) + 1 }).map(() => ({
                  name: faker.company.name(),
                }))
              }
            },
          }
        }
      }
    })
  }
}


// seed law
console.log("Seeding law...")
if (!await db.law.findFirst({ where: { title: "Kitab Hukum Perdata" } })) {
  console.log("Seeding law kitab hukum perdata...")
  const records = await processFile(path.join(__dirname, "../../datasets/kitab-hukum-perdata/dataset_clean.csv"));
  await db.law.create({
    data: {
      title: "Kitab Hukum Perdata",
      description: "Kitab Hukum Perdata adalah kitab hukum yang mengatur mengenai hukum perdata",
      LawBab: {
        create: {
          name: "General",
          LawData: {
            create: records
              // remove header
              .slice(1)
              .map((record) => ({
                pasal: `${record[0]}`.replace("Pasal ", ""),
                content: record[1],
              }))
          }
        }
      }
    }
  })
}
if (!await db.law.findFirst({ where: { title: "Undang-Undang Dasar 1945" } })) {
  console.log("Seeding law uud 1945...")
  const records = await processFile(path.join(__dirname, "../../datasets/uud1945/uud1945.csv"));
  // data like :
  // [ ['bab', 'judul bab', 'pasal', 'isi'], ... ]
  const perBab: {
    nomorBab: string,
    pasals: {
      pasal: string,
      content: string,
    }[]
  }[] = []
  for (let i = 0; i < records.length; i++) {
    // skip header
    if (i === 0) continue;
    const record = records[i];
    const name = `${record[0]} ${record[1]}`
    if (perBab.find((bab) => bab.nomorBab === name)) {
      perBab.find((bab) => bab.nomorBab === name)?.pasals.push({
        pasal: `${record[2]}`,
        content: record[3],
      })
    } else {
      perBab.push({
        nomorBab: name,
        pasals: [{
          pasal: `${record[2]}`,
          content: record[3],
        }]
      })
    }
  }
  await db.law.create({
    data: {
      title: "Undang-Undang Dasar 1945",
      description: "Undang-Undang Dasar 1945 adalah undang-undang dasar yang mengatur mengenai hukum dasar",
      LawBab: {
        create: perBab.map((bab) => ({
          name: bab.nomorBab,
          LawData: {
            create: bab.pasals.map((pasal) => ({
              pasal: pasal.pasal,
              content: pasal.content,
            }))
          }
        }))
      }
    }
  })
}

// seed message
console.log("Seeding message...")
for (let index = 1; index <= 12; index++) {
  const lawyerId = Math.floor(Math.random() * (62 - 13 + 1)) + 13
  await db.chat.create({
    data: {
      user1_id: index,
      user2_id: lawyerId
    }
  })

  await db.message.create({
    data: {
      chatId: index,
      from: index,
      to: lawyerId,
      message: "Hallo"
    }
  })

  await db.message.create({
    data: {
      chatId: index,
      from: lawyerId,
      to: index,
      message: "Ya hallo, ada yang bisa dibantu ?"
    }
  })
}

// seed posting
console.log("Seeding post...")
for (let index = 1; index <= 10; index++) {
  const comment = Math.floor(Math.random() * (5 - 1 + 1)) + 1
  await db.post.create({
    data: {
      title: faker.lorem.sentence(5),
      content: faker.lorem.paragraphs(),
      userId: index
    }
  })

  for (let i = 1; i <= comment; i++) {
    await db.postComment.create({
      data: {
        postId: index,
        userId: Math.floor(Math.random() * (25 - 1 + 1)) + 1,
        content: faker.lorem.paragraphs()
      }
    })
  }
}
