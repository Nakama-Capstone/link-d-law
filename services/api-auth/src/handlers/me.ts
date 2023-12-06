import express from "express"
import { AuthExpressRequest } from "@/middlewares/auth"

export const MeHandler = express.Router().get("/me", async (req, res) => {
  const { auth } = req as AuthExpressRequest
  const expired_in = (auth.jwt.payload.exp || 0) - Math.floor(Date.now() / 1000)

  res.json({
    ok: true,
    message: "me",
    data: {
      user: auth.user,
      expired_in,
      expired_in_human: `${Math.floor(expired_in / 60)} minutes`,
    }
  })
})