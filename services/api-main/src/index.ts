import { MicroserviceService } from "@law-d-link/service"
import pkg from "../package.json"
import lawRoute from "./routes/lawRoute"
import userProfileRoute from "./routes/userProfileRoute"
import chatRoute from "./routes/chatRoute"
import lawyerRoute from "./routes/lawyerRoute"
import express from "express"

// prepare all service needed
const service = new MicroserviceService({
  packagejson: pkg,
})

// SETUP
const {
  express: app,
  createGroup,
  httpService
} = service.createHttpServer({
  port: Number(service.getEnv("SERVICE_API_USER_PORT", "3001")),
  apiVersion: "v1",
})

// TODO: move this to middlewares folder
// middleware
const AuthMiddleware = async (req: any, res: any, next: any) => {
  let me = req.query._auth_profile
  console.log('me', typeof me, me)
  if (!me) {
    try {
      me = JSON.parse(req.query._auth_profile)
    // eslint-disable-next-line no-empty
    } catch (error) {}
  }
  delete req.query._auth_profile
  Object.defineProperty(req, 'auth', {
    value: me,
    writable: false,
    enumerable: true,
    configurable: false
  })
  next()
}
export interface RequestAuthMiddleware extends express.Request {
  auth: any
}

// LISTING ROUTES
// creategroup is a helper function to create a group of routes with a prefix
// it also create a new express.Router() instance
// so this script below have url prefix /v1/* (/v1/login, /v1/register, etc)
createGroup(app, 'v1', (router) => {
  router.use('/', lawRoute)
  router.use('/', userProfileRoute)
  router.use('/', chatRoute)
  router.use('/', lawyerRoute)

  router.get('/test', AuthMiddleware, (req, res) => {
    const { auth } = req as RequestAuthMiddleware
    console.log('auth', typeof auth)
    return res.json({
      ok: true,
      message: 'test',
      data: {
        test: true,
        auth
      }
    })
  })
})


// LISTENING
httpService.listen()