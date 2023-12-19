import express from "express"
import { AuthExpressRequest } from "@/middlewares/auth"
import { removeUserToken } from "@/utils/store"

export const LogoutToken = express.Router().get("/logout", async (req, res) => {
  const { auth } = req as AuthExpressRequest

  await removeUserToken(auth.user.id as number, auth.token.accessToken)

  res.json({
    ok: true,
    message: "revoked token success",
  })
})
