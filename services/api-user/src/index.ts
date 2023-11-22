import express from "express";
import dotenv from "dotenv";
import path from "path";
import pkg from "../package.json";

// load env
dotenv.config({
  path: path.resolve(process.cwd(), '../../', '.env')
});
const CONFIG = {
  PORT: Number(process.env.SERVICE_API_USER_PORT || "3002")
}

const app = express();

app.get("/", (req, res) => {
  res.json({
    ok: true,
  })
});

app.listen(CONFIG.PORT, () => {
  console.log(`${pkg.name} Listening on port ${CONFIG.PORT}`);
})