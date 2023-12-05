import { MicroserviceService } from "@law-d-link/service"
import pkg from "../package.json"
import lawRoute from "./routes/lawRoute"
import userProfileRoute from "./routes/userProfileRoute"
import chatRoute from "./routes/chatRoute"
import lawyerRoute from "./routes/lawyerRoute"

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
  router.use('/', lawRoute)
  router.use('/', userProfileRoute)
  router.use('/', chatRoute)
  router.use('/', lawyerRoute)
})


// LISTENING
httpService.listen()