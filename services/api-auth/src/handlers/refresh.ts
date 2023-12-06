import express from "express"
import { AuthExpressRequest } from "@/middlewares/auth"
import { removeUserToken, storeUserToken } from "@/utils/store"
import { generateToken } from "@/funcs"

export const RefreshHandler = express.Router().post("/refresh", async (req, res) => {
  const { auth } = req as AuthExpressRequest

  // remove previous token
  await removeUserToken(auth.user.id as number, auth.token.accessToken)

  // generate token
  const new_auth = await generateToken({ id: auth.user.id, email: auth.user.email })
  await storeUserToken(auth.user.id, new_auth.accessToken, new_auth.accessTokenMaxAge)

  res.json({
    ok: true,
    message: "refresh success",
    data: {
      auth: new_auth
    },
  })
})
