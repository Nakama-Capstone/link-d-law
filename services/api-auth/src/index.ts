import { MicroserviceService } from "@law-d-link/service"
import pkg from "../package.json"
import { RegisterHandler } from "@/handlers/register"
import { LoginHandler } from "@/handlers/login"
import { MeHandler } from "@/handlers/me"
import { AuthMiddleware } from "@/middlewares/auth"
import { RefreshHandler } from "@/handlers/refresh"
import { cache } from "@/utils/cache"

// prepare all service needed
const service = new MicroserviceService({
  packagejson: pkg,
})


// SETUP
// http server
const {
  express: app,
  createGroup,
  httpService
} = service.createHttpServer({
  port: Number(service.getEnv("SERVICE_API_AUTH_PORT", "3002")),
  apiVersion: "v1",
})
// connect cache with redis
try {
  await cache.connect()
  // eslint-disable-next-line no-console
  service.log.info("🚀  redis connected")
} catch (error) {
  service.log.error("🚀  redis connection error:", error)
}

// LISTING ROUTES
// creategroup is a helper function to create a group of routes with a prefix
// it also create a new express.Router() instance
// so this script below have url prefix /v1/* (/v1/login, /v1/register, etc)
createGroup(app, 'v1', (router) => {
  router.use(RegisterHandler)
  router.use(LoginHandler)
  router.use(AuthMiddleware, MeHandler)
  router.use(AuthMiddleware, RefreshHandler)
  
  // TODO: route to logout
  router.get("/logout", (req, res) => {
    res.json({
      ok: true,
      message: "🚀 logout",
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