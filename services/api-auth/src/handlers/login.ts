import express from "express"
import { Password, validateWithZod } from "@law-d-link/service"
import { userLoginSchema } from "@law-d-link/schema"
import { db } from "@/utils/db"
import { generateToken } from "@/funcs"
import { storeUserToken } from "@/utils/store"

export const LoginHandler = express.Router().post("/login", async (req, res) => {
  const { email, password } = req.body

  const validated = validateWithZod(userLoginSchema, req.body)
  if (validated.isError) return res.status(400).json({
    ok: false,
    message: "validation error",
    errors: validated.errors
  })
  
  const user = await db.user.findUnique({
    where: {
      email
    }
  })

  if (!user) {
    return res.status(400).json({
      ok: false,
      message: "user not found",
    })
  }

  if (Password.compare(password, user.password) === false) {
    return res.status(400).json({
      ok: false,
      message: "wrong password",
    })
  }


  // generate token
  const auth = await generateToken({ id: user.id, email: user.email })
  await storeUserToken(user.id, auth.accessToken, auth.accessTokenMaxAge)

  // return
  res.json({
    ok: true,
    message: "login success",
    data: {
      auth
    },
  })
})
