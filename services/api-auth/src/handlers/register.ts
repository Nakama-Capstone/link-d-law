import express from "express"
import { Password, validateWithZod } from "@law-d-link/service"
import { userRegisterSchema } from "@law-d-link/schema"
import { db } from "@/utils/db"

export const RegisterHandler = express.Router().post("/register", async (req, res) => {
  // validation
  const validated = validateWithZod(userRegisterSchema, req.body)
  if (validated.isError) return res.status(400).json({
    ok: false,
    message: "validation error",
    errors: validated.errors,
  })

  // get data
  const { firstName, lastName, middleName, email, password, passwordConfirmation } = req.body

  // processing
  // password
  if (password !== passwordConfirmation) {
    return res.status(400).json({
      ok: false,
      message: "password not match",
    })
  }
  // check if email already exist
  const emailExist = await db.user.findUnique({
    where: {
      email
    }
  })
  if (emailExist) {
    return res.status(400).json({
      ok: false,
      message: "email already exist",
    })
  }
  // hashing password
  const hashedPassword = Password.hash(password)
  
  // save
  const user = await db.user.create({
    data: {
      firstName,
      lastName,
      middleName,
      email,
      password: hashedPassword
    }
  })

  // return
  return res.status(201).json({
    ok: true,
    message: "🚀 register",
    data: {
      user,
    }
  })
})