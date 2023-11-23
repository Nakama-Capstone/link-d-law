import express from "express";
import dotenv from "dotenv";
import path from "path";
import pkg from "../package.json";

// load env
dotenv.config({
  path: path.resolve(process.cwd(), '../../', '.env')
});
const CONFIG = {
  PORT: Number(process.env.SERVICE_API_AUTH_PORT || "3001")
}

// SETUP
const app = express();
app.get("/", (req, res) => {
  res.json({
    ok: true,
    message: "🚀",
    data: {
      routers: app._router.stack,
    }
  })
});

// TODO: v1 routes
const routev1 = express.Router();
routev1.get("/", (req, res) => {
  res.json({
    ok: true,
    message: "🚀 auth",
  })
});
// TODO: route to login
routev1.get("/login", (req, res) => {
  res.json({
    ok: true,
    message: "🚀 login",
  })
});
// TODO: route to register
routev1.get("/register", (req, res) => {
  res.json({
    ok: true,
    message: "🚀 register",
  })
});
// TODO: route to get user info from token
routev1.get("/me", (req, res) => {
  res.json({
    ok: true,
    message: "🚀 me",
  })
});
// TODO: route to refresh token
routev1.get("/refresh", (req, res) => {
  res.json({
    ok: true,
    message: "🚀 me",
  })
});
app.use("/v1", routev1);

app.listen(CONFIG.PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`${pkg.name} Listening on port ${CONFIG.PORT}`);
})