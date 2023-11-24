import { describe, it, expect, afterAll, beforeAll } from "bun:test";
import dotenv from "dotenv"
import path from "path"

describe("API Gateway", () => {
  // load env
  dotenv.config({ path: path.resolve(__dirname, "../.env") })

  // setup
  const API_GATEWAY_BASE = `localhost:${process.env.SERVICE_API_GATEWAY_PORT || 80}`
  const API_GATEWAY_VERSION = process.env.API_GATEWAY_VERSION || "v1"
  const API_GATEWAY_URL = `http://${API_GATEWAY_BASE}/${API_GATEWAY_VERSION}`

  // setup test
  beforeAll(async () => {
    console.log("=> Setup API Gateway test")
    try {
      await fetch(API_GATEWAY_BASE, {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        },
      })
      console.log("API Gateway is running")
    } catch (error) {
      console.log("API Gateway is not running, start it")
      // exit error
      process.exit(1)
    }
  });
  
  it("/ should return 200", async () => {
    const response = await fetch(API_GATEWAY_BASE, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    })
    const data = await response.json() as {
      ok: boolean,
      data: {
        version: string
      }
    }

    expect(response.status).toEqual(200)
    expect(data).toHaveProperty("ok", true)
    expect(data).toHaveProperty("data")
    expect(data?.data).toHaveProperty("version", API_GATEWAY_VERSION)
  });

  it("/api/v1 should return 200", async () => {
    const response = await fetch(API_GATEWAY_URL, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    })
    const data = await response.json() as {
      ok: boolean,
      data: {
        apiVersion: string
      }
    }

    expect(response.status).toEqual(200)
    expect(data).toHaveProperty("ok", true)
    expect(data.data).toHaveProperty("apiVersion", API_GATEWAY_VERSION)
  });

  // on test finish
  afterAll(() => {
    console.log("API Gateway test finished")
  });
});
