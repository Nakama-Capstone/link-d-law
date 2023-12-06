/* eslint-disable no-console */
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
  
  let REQUEST_COUNT = 0
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
        service: string
      }
    }
    REQUEST_COUNT += 1

    expect(response.status).toEqual(200)
    expect(data).toHaveProperty("ok", true)
    expect(data).toHaveProperty("data")
    expect(data?.data).toHaveProperty("service", "@law-d-link/api-gateway")
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
    REQUEST_COUNT += 1

    expect(response.status).toEqual(200)
    expect(data).toHaveProperty("ok", true)
    expect(data.data).toHaveProperty("apiVersion", API_GATEWAY_VERSION)
  });

  it("security test: rate limiter", async () => {
    const RATE_LIMITER_TEST_COUNT = 110
    
    const EXPECT_SUCCESS_COUNT = 100 - REQUEST_COUNT
    const EXPECT_ERROR_COUNT = 10

    let currentI = 0
    let successCount = 0
    let errorCount = 0
    while (currentI < RATE_LIMITER_TEST_COUNT) {
      try {
        const response = await fetch(API_GATEWAY_URL, {
          method: "GET",
          headers: {
            "Content-Type": "application/json"
          }
        })
        REQUEST_COUNT += 1
        const data = await response.json() as {
          ok: boolean,
          data: {
            apiVersion: string
          }
        }
        if (data.ok) successCount += 1
      } catch (error) {
        errorCount += 1
      }
      currentI += 1
      Bun.write(Bun.stdin, '|')
    }
    Bun.write(Bun.stdin, '\n')

    console.log(`Rate limiter test: ${currentI}/${RATE_LIMITER_TEST_COUNT} request expected error in ${EXPECT_SUCCESS_COUNT} request`)
    console.log(`Rate limiter test: success ${successCount} request`)
    console.log(`Rate limiter test: error ${errorCount} request`)
    expect(successCount).toBeGreaterThan(EXPECT_SUCCESS_COUNT)
    expect(errorCount).toBeGreaterThan(EXPECT_ERROR_COUNT)
  });

  // on test finish
  afterAll(() => {
    console.log("API Gateway test finished")
  });
});
