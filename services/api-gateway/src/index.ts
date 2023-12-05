// import { MicroserviceService } from "@law-d-link/service"
// import pkg from "../package.json"
// import { createProxyMiddleware } from "http-proxy-middleware";

// // prepare all service needed
// const service = new MicroserviceService({
//   packagejson: pkg,
// })


// // SETUP
// const {
//   express: app,
//   createGroup,
//   httpService
// } = service.createHttpServer({
//   port: Number(service.getEnv("SERVICE_API_GATEWAY_PORT", "80")),
//   apiVersion: "v1",
// })

// app.get("/hello", (req, res) => {
//   res.json({"hello": "hai"})
// })

// // TODO: route /auth to auth service
// createGroup(app, "v1", (router) => {
//   router.use("/auth", createProxyMiddleware({
//     target: `http://localhost:${process.env.SERVICE_API_AUTH_PORT || "3001"}/v1`,
//     changeOrigin: true,
//     pathRewrite: {
//       [`^/v1/auth`]: "",
//     },
//   }));
// })


// httpService.listen()

import express from "express";
import dotenv from "dotenv";
import path from "path";
import pkg from "../package.json";
import { createProxyMiddleware } from "http-proxy-middleware";

// load env
dotenv.config({
  path: path.resolve(process.cwd(), '../../', '.env')
});
const CONFIG = {
  PORT: Number(process.env.SERVICE_API_GATEWAY_PORT || "80"),
  SERVICE_API_VERSION: process.env.SERVICE_API_VERSION || "v1",
}

// SETUP
const app = express();
app.get("/", (req, res) => {
  res.json({
    ok: true,
    message: "🚀",
    data: {
      name: pkg.name,
      version: CONFIG.SERVICE_API_VERSION,
    }
  })
});

// TODO: v1 routes
const routev1 = express.Router();
routev1.get("/", (req, res) => {
  res.json({
    ok: true,
    message: "🚀",
    data: {
      apiVersion: 'v1',
    }
  })
});
// TODO: route /auth to auth service
routev1.use("/auth", createProxyMiddleware({
  target: `http://localhost:${process.env.SERVICE_API_AUTH_PORT || "3001"}/v1`,
  changeOrigin: true,
  pathRewrite: {
    [`^/v1/auth`]: "",
  },
}));
// TODO: route /auth to auth service
routev1.use("/", createProxyMiddleware({
  target: `http://localhost:${process.env.SERVICE_API_USER_PORT || "3002"}/v1`,
  changeOrigin: true,
  pathRewrite: {
    [`^/v1/`]: "",
  },
}));

app.use("/v1", routev1);

// LISTEN
app.listen(CONFIG.PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`${pkg.name} Listening on port ${CONFIG.PORT}`);
})