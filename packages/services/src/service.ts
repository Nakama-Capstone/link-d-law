/* eslint-disable no-console */
import express from "express";
import dotenv from "dotenv";
import path from "path";
import fs from "fs";
import consola, { ConsolaInstance } from "consola";
import chalk from "chalk";

export interface MicroserviceServiceConfig {
  packagejson: object;
  envPath?: string;
}

export interface MicroserviceServiceHttpServerConfig {
  port: number;
  apiVersion: string;
  withDefaultExpressMiddlewares: boolean;
}

export const DEFAULT_CONFIG_HTTP_SERVER: MicroserviceServiceHttpServerConfig = {
  apiVersion: "v1",
  port: 3000,
  withDefaultExpressMiddlewares: true,
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const LoadConfigEnv = (envPath?: string) => {
  const loadEnv2LevelPath = () => {
    const paths_tables: [string, number][] = [
      // [path, priority]
      [path.resolve(process.cwd(), '.env'), 5],
      [path.resolve(process.cwd(), '../', '.env'), 5],
      [path.resolve(process.cwd(), '../../', '.env'), 5],

      [path.resolve(process.cwd(), '.env.development'), 3],
      [path.resolve(process.cwd(), '../', '.env.development'), 3],
      [path.resolve(process.cwd(), '../../', '.env.development'), 3],

      // check if NODE_ENV is production, make priority in 4
      [path.resolve(process.cwd(), '.env.production'), (process.env.NODE_ENV === 'production') ? 4 : 1],
      [path.resolve(process.cwd(), '../', '.env.production'), (process.env.NODE_ENV === 'production') ? 4 : 1],
      [path.resolve(process.cwd(), '../../', '.env.production'), (process.env.NODE_ENV === 'production') ? 4 : 1],
    ]
    
    // search and check folder exists per priority, if found, return path
    // high priority first
    const paths_tables_sorted = paths_tables.sort((a, b) => b[1] - a[1]) // high priority first
    for (const [p] of paths_tables_sorted) {
      if (fs.existsSync(p)) return p
    }
  }

  const env_path = loadEnv2LevelPath()

  dotenv.config({
    path: env_path
  });

  return env_path
}

export class MicroserviceService {
  logger: ConsolaInstance = consola.create({})
  log = {
    info: (msg: any, ...args: any) => {
      return this.logger.info(chalk.blue(`[LOG]`), msg, ...args)
      if (args.length > 0) {
        this.logger.info(chalk.blue(`[LOG]`) + msg, ...args)
      } else {
        this.logger.info(chalk.blue(`[LOG]`), msg)
      }
    },
    debug: (msg: any, ...args: any) => {
      return this.logger.debug(chalk.yellow(`[DEBUG]`), msg, ...args)
      if (args.length > 0) {
        this.logger.debug(chalk.yellow(`[DEBUG]`) + msg, ...args)
      } else {
        this.logger.debug(chalk.yellow(`[DEBUG]`), msg)
      }
    },
    error: (msg: any, ...args: any) => {
      return this.logger.error(chalk.red(`[ERROR]`), msg, ...args)
      if (args.length > 0) {
        this.logger.error(chalk.red(`[ERROR]`) + msg, ...args)
      } else {
        this.logger.error(chalk.red(`[ERROR]`), msg)
      }
    }
  }

  constructor(public config: MicroserviceServiceConfig) {
    this.log.info(`Service "${this.getPackageConfig()?.name}" Instantiated`);

    // load config
    this.loadConfigEnv();
  }

  private loadConfigEnv() {
    const env_path = LoadConfigEnv();
    // load env
    if (env_path) this.log.info(`Service "${this.getPackageConfig()?.name}" use ${env_path}`);
    else this.log.info(`Service "${this.getPackageConfig()?.name}" running without env file`);
  }

  getPackageConfig() {
    return this.config.packagejson as unknown as {
      name: string;
      version: string;
    };
  }

  getEnv(key: string, defaultValue?: string): string|undefined {
    return process.env[key] || defaultValue;
  }

  createHttpServer(config: Partial<MicroserviceServiceHttpServerConfig>) {
    const app = express();
    config = {
      ...DEFAULT_CONFIG_HTTP_SERVER,
      ...config,
    }

    // PLUGINS
    if (config.withDefaultExpressMiddlewares) {
      app.use(express.urlencoded({ extended: true }));
      app.use(express.json());
    }
    
    // HEALTH CHECK
    app.get("/", (req, res) => {
      res.json({
        ok: true,
        message: "🚀",
        data: {
          service: this.getPackageConfig()?.name,
        }
      })
    });

    // FUNCS
    const listen = () => {
      return app.listen(config.port, () => {
        // eslint-disable-next-line no-console
        this.log.info(`Service "${this.getPackageConfig()?.name}" HTTP Listening on port ${config.port}`);
      })
    }
    
    const createGroup = (parent: express.Router, prefix: string, func?: (router: express.Router) => void) => {
      const route = express.Router();
      parent.use(`/${prefix}`, route);
      if (func) func(route);
      return route;
    }

    return {
      express: app,
      createGroup,
      httpService: {
        listen,
      }
    };
  }
}