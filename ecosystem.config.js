module.exports = [
  {
    name: "service-redis",
    cwd: "~",
    script: "redis-server",
  },
  {
    name: "service-api-gateway",
    // folder in services/api-gateway and run bun start
    cwd: "./services/api-gateway",
    script: "bun",
    args: "start",
    env: {
      NODE_ENV: "production",
    }
  },
  {
    name: "service-api-auth",
    cwd: "./services/api-auth",
    script: "bun",
    args: "start",
    env: {
      NODE_ENV: "production",
    }
  },
  {
    name: "service-api-main",
    cwd: "./services/api-main",
    script: "bun",
    args: "start",
    env: {
      NODE_ENV: "production",
    }
  },
  {
    name: "service-kim-ai",
    cwd: "./services/kim-ai",
    script: "python3.9",
    args: "src/main.py",
    env: {
      NODE_ENV: "production",
    }
  },
];