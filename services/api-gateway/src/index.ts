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
// TODO: passing auth to services
const routev1auth = express.Router();
routev1auth.use((req, res, next) => {
  // get token from query ?token= or from header
  const token = req?.query?.token || (req.headers.authorization || "").replace("Bearer ", "");
  console.log("access protected api with token :", token);

  // TODO: check token with auth service
  // TODO: hit auth service /me with token to get user info
  if (!token) {
    return res.status(401).json({
      ok: false,
      message: "unauthorized",
    })
  }

  next();
});
routev1auth.get("/protected", (req, res) => {
  res.json({
    ok: true,
    message: "🚀",
  })
});
routev1.use("/", routev1auth);
app.use("/v1", routev1);

// LISTEN
app.listen(CONFIG.PORT, () => {
  console.log(`${pkg.name} Listening on port ${CONFIG.PORT}`);
})