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
  // CHECK FROM GATEWAY
  // check is authorized
  let authErrorsResponse
  try {
    authErrorsResponse = JSON.parse(req.headers["x-gateway-auth-response"])
  } catch (error) {
    // did not found auth response
  }
  const isAuthorized = req.headers['x-gateway-auth-authorized'] == "true" 
  if (!isAuthorized) return res.status(401).json({
    ok: false,
    message: 'Unauthorized',
    errors: [
      {
        message: 'need valid token'
      },
      ...(authErrorsResponse?.errors || [])
    ]
  })
  // get auth user data
  const authDataRaw = req.headers['x-gateway-auth-data']
  if (!authDataRaw) return res.status(401).json({
    ok: false,
    message: 'Unauthorized',
    errors: [
      {
        message: 'user not found'
      }
    ]
  })
  let authData
  try {
    authData = JSON.parse(authDataRaw)
  } catch (error) {
    return res.status(401).json({
      ok: false,
      message: 'Unauthorized',
      errors: [
        {
          message: 'invalid user auth data'
        }
      ]
    }) 
  }
  

  // parse data
  Object.defineProperty(req, 'auth', {
    value: authData,
    writable: false,
    enumerable: true,
    configurable: false
  })


  next()
}
export interface RequestAuthMiddleware extends express.Request {
  auth: {
    user: {
      id: number
      email: string
      firstName: string
      lastName: string
      middleName?: string
      createdAt: string
      updatedAt: string
    }
    expired_at: number
    expired_in_human: string
  }
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
    return res.json({
      ok: true,
      message: 'test',
      data: {
        auth,
      }
    })
  })
})


// LISTENING
httpService.listen()