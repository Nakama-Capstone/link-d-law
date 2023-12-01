import { MicroserviceService } from "@law-d-link/service"
import pkg from "../package.json"

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

// LISTING ROUTES
// creategroup is a helper function to create a group of routes with a prefix
// it also create a new express.Router() instance
// so this script below have url prefix /v1/* (/v1/login, /v1/register, etc)
createGroup(app, 'v1', (router) => {
  // TODO: get one user by id
  router.get("/:id", (req, res) => {
    if (!req.params.id) {
      return res.status(400).json({
        ok: false,
        message: "bad request",
      })
    }
    
    res.json({
      ok: true,
      message: "get user by id success",
      data: {
      }
    })
  })
  // TODO: get all user
  router.get("/login", (req, res) => {
    res.json({
      ok: true,
      message: "🚀 login",
    })
  })
})


// LISTENING
httpService.listen();