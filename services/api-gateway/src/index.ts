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
import axios, { AxiosError } from "axios";
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
const routermain = express.Router();
routermain.use("/", createProxyMiddleware({
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
        if (error instanceof AxiosError) {
          req.headers["x-gateway-auth-authorized"] = "false"
          req.headers["x-gateway-auth-error"] = JSON.stringify(error.response?.data?.errors || [])
          req.headers["x-gateway-auth-response"] = JSON.stringify(error.response?.data || {})
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


    // // if newpath have ? then add & else add ?
    // if (newPath.includes("?")) newPath += `&_auth_profile=${JSON.stringify(req.query._auth_profile)}`
    // else newPath += `?_auth_profile=${JSON.stringify(req.query._auth_profile)}`
    // console.log("pathRewrite", path, newPath)
    const newPath = path.replace(/^\/v1\//, "/")
    return newPath
  },
  // onClose: (res, socket, head) => {
  //   console.log("onClose", res, socket, head)
  // },
  // onError: (err, req, res) => {
  //   console.log("onError", err, req, res)
  // },
  // onOpen: (socket) => {
  //   console.log("onOpen", socket)
  // },
  // onProxyReq: (proxyReq, req, res) => {
  //   console.log("onProxyReq", req, res)
  // },
  // onProxyRes: (proxyRes, req, res) => {
  //   console.log("onProxyRes", req, res)
  // },
  // onProxyReqWs: (proxyReq, req, socket, options, head) => {
  //   console.log("onProxyReqWs", req, socket, options, head)
  // }
  // onProxyReq: async (proxyReq, req, res) => {
  //   console.log("onProxyReq", req.query)
  //   const token = req.query.token as string || req.headers.authorization?.split(" ")[1] || ""
  //   if (token) {
  //     try {
  //       const profile = await axios({
  //         method: "GET",
  //         url: `http://localhost:${process.env.SERVICE_API_AUTH_PORT || "3001"}/v1/me`,
  //         headers: {
  //           authorization: `Bearer ${token}`,
  //         }
  //       })
  //       req.query._auth_profile = profile.data.data
  //     } catch (error) {
  //       if (error instanceof AxiosError) {
  //         return res.status(401).json({
  //           ok: false,
  //           message: "unauthorized",
  //           errors: [...(error.response?.data?.errors || [])]
  //         })
  //       }
  //     }
  //   }
  //   console.log("profile", token, req.query._auth_profile)
  // }
}));
routev1.use("/", routermain);

app.use("/v1", routev1);

// LISTEN
app.listen(CONFIG.PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`${pkg.name} Listening on port ${CONFIG.PORT}`);
})