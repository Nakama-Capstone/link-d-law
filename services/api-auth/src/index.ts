import { MicroserviceService, Password, initPrisma } from "@law-d-link/service"
import validator from "express-validator"
import pkg from "../package.json"
import { generateToken, verifyToken } from "./funcs"

// prepare all service needed
const service = new MicroserviceService({
  packagejson: pkg,
})


// SETUP
const db = initPrisma()
const {
  express: app,
  createGroup,
  httpService
} = service.createHttpServer({
  port: Number(service.getEnv("SERVICE_API_AUTH_PORT", "3002")),
  apiVersion: "v1",
})

// LISTING ROUTES
// creategroup is a helper function to create a group of routes with a prefix
// it also create a new express.Router() instance
// so this script below have url prefix /v1/* (/v1/login, /v1/register, etc)
createGroup(app, 'v1', (router) => {
  // TODO: route to register
  router.post(
    "/register",
    validator.body("firstName").notEmpty(),
    validator.body("lastName").notEmpty(),
    validator.body("email").isEmail().normalizeEmail().notEmpty(),
    validator.body("password").isLength({ min: 8 }).notEmpty(),
    validator.body("passwordConfirmation").isLength({ min: 8 }).notEmpty(),
    async (req, res) => {
      const validated = validator.validationResult(req)
      if (!validated.isEmpty()) return res.status(400).json({
        ok: false,
        message: "validation error",
        data: validated.array()
      })

      const { firstName, lastName, email, password, passwordConfirmation } = req.body

      if (password !== passwordConfirmation) {
        return res.status(400).json({
          ok: false,
          message: "password not match",
        })
      }

      const hashedPassword = Password.hash(password)
      
      const user = await db.user.create({
        data: {
          firstName,
          lastName,
          email,
          password: hashedPassword
        }
      })

      res.json({
        ok: true,
        message: "🚀 register",
        data: {
          user,
        }
      })
    }
  )
  
  // TODO: route to login
  router.post(
    "/login",
    validator.body("email").isEmail().normalizeEmail().notEmpty(),
    validator.body("password").isLength({ min: 8 }).notEmpty(),
    async (req, res) => {
    const { email, password } = req.body

    const validated = validator.validationResult(req)
    if (!validated.isEmpty()) return res.status(400).json({
      ok: false,
      message: "validation error",
      data: validated.array()
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

    res.json({
      ok: true,
      message: "login success",
      data: {
        auth: await generateToken({ id: user.id, email: user.email })
      },
    })
  })
  // TODO: route to logout
  router.get("/logout", (req, res) => {
    res.json({
      ok: true,
      message: "🚀 logout",
    })
  })
  // TODO: route to get user info from token
  router.get("/me", async (req, res) => {
    const token = req.query.token as string || req.headers.authorization?.split(" ")[1] || ""
    if (!token) {
      return res.status(401).json({
        ok: false,
        message: "unauthorized",
      })
    }

    const verified = await verifyToken(token)

    if (!verified) {
      return res.status(401).json({
        ok: false,
        message: "unauthorized",
      })
    }

    const user = await db.user.findUnique({
      where: {
        id: verified.payload.id as number
      }
    })

    if (!user) {
      return res.status(401).json({
        ok: false,
        message: "unauthorized",
      })
    }

    const expired_in = (verified.payload.exp || 0) - Math.floor(Date.now() / 1000)

    res.json({
      ok: true,
      message: "me",
      data: {
        user,
        verified,
        expired_in,
        expired_in_human: `${Math.floor(expired_in / 60)} minutes`,
      }
    })
  })
  // TODO: route to refresh token
  router.get("/refresh", (req, res) => {
    res.json({
      ok: true,
      message: "🚀 me",
    })
  })
})


// LISTENING
httpService.listen();