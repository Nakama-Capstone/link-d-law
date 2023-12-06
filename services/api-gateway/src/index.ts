import { MicroserviceService } from "@law-d-link/service"
import axios, { AxiosError } from "axios";
import { createProxyMiddleware } from "http-proxy-middleware";
import { rateLimit } from 'express-rate-limit'
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
  port: Number(service.getEnv("SERVICE_API_GATEWAY_PORT", "80")),
  apiVersion: process.env.SERVICE_API_VERSION || "v1",
  withDefaultExpressMiddlewares: false,
})
// rate limiter
app.use(rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 100,
  standardHeaders: 'draft-7',
  legacyHeaders: false,
}))

createGroup(app, 'v1', (router) => {
  router.get("/", (req, res) => {
    return res.json({
      ok: true,
      message: "success",
      data: {
        apiVersion: "v1",
      }
    })
  })
  // AUTH ROUTE
  router.use("/auth", createProxyMiddleware({
    target: `http://localhost:${process.env.SERVICE_API_AUTH_PORT || "3001"}/v1`,
    changeOrigin: true,
    pathRewrite: {
      [`^/v1/auth`]: "",
    },
  }))
  // MAIN ROUTE
  router.use("/", createProxyMiddleware({
    target: `http://localhost:${process.env.SERVICE_API_USER_PORT || "3002"}/v1`,
    changeOrigin: true,
    // { [`^/v1/`]: "",}
    pathRewrite: async (path, req) => {
      // token
      const token = req.query.token as string || req.headers.authorization?.split(" ")[1] || ""
      if (token) {
        try {
          const profile = await axios({
            method: "GET",
            url: `http://localhost:${process.env.SERVICE_API_AUTH_PORT || "3001"}/v1/me`,
            headers: {
              authorization: `Bearer ${token}`,
            }
          })
          req.headers["x-gateway-auth-data"] = JSON.stringify(profile.data?.data || {})
          req.headers["x-gateway-auth-authorized"] = "true"
        } catch (error) {
          req.headers["x-gateway-auth-authorized"] = "false"
          if (error instanceof AxiosError) {
            req.headers["x-gateway-auth-error"] = JSON.stringify(error.response?.data?.errors || [])
            req.headers["x-gateway-auth-response"] = JSON.stringify(error.response?.data || {})
          } else {
            service.log.debug(`error: ${error}`, error)
            req.headers["x-gateway-auth-error"] = JSON.stringify([{message: "internal server error"}])
          }
        }
      }
      
      // rewrite
      req.query.token = token
      req.headers.authorization = `Bearer ${token}`
      req.headers["x-gateway-host"] = req.headers.host
      req.headers["x-gateway-path"] = path
      req.headers["x-gateway-query"] = JSON.stringify(req.query)
      req.headers["x-gateway-with-auth"] = token ? "true" : "false"
  
      //
      const newPath = path.replace(/^\/v1\//, "/")
      return newPath
    },
  }));
})


httpService.listen()