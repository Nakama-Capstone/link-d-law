import pkg from "../package.json";
import { MicroserviceService } from "@law-d-link/service"

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
  port: Number(service.getEnv("SERVICE_API_AUTH_PORT", "3001")),
  apiVersion: "v1",
});

// LISTING ROUTES
// creategroup is a helper function to create a group of routes with a prefix
// it also create a new express.Router() instance
// so this script below have url prefix /v1/* (/v1/login, /v1/register, etc)
createGroup(app, 'v1', (router) => {
  // TODO: route to register
  router.get("/register", (req, res) => {
    res.json({
      ok: true,
      message: "🚀 register",
    })
  });
  // TODO: route to login
  router.get("/login", (req, res) => {
    res.json({
      ok: true,
      message: "🚀 login",
    })
  });
  // TODO: route to logout
  router.get("/logout", (req, res) => {
    res.json({
      ok: true,
      message: "🚀 logout",
    })
  });
  // TODO: route to get user info from token
  router.get("/me", (req, res) => {
    res.json({
      ok: true,
      message: "🚀 me",
    })
  });
  // TODO: route to refresh token
  router.get("/refresh", (req, res) => {
    res.json({
      ok: true,
      message: "🚀 me",
    })
  });
})


// LISTENING
httpService.listen();