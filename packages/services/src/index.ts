import express from "express";
import dotenv from "dotenv";
import path from "path";
import fs from "fs";

export interface MicroserviceServiceConfig {
  packagejson: object;
  envPath?: string;
}

export interface MicroserviceServiceHttpServerConfig {
  port: number;
  apiVersion: string;
}

export class MicroserviceService {
  constructor(public config: MicroserviceServiceConfig) {
    console.log(`Service "${this.getPackageConfig()?.name}" Instantiated`);

    // load config
    this.loadConfigEnv();
  }

  private loadConfigEnv() {
    let env_path: string|undefined = path.resolve(process.cwd(), '../../', '.env');
    if (!fs.existsSync(env_path)) env_path = path.resolve(process.cwd(), '../', '.env');
    if (!fs.existsSync(env_path)) env_path = path.resolve(process.cwd(), '.env');
    if (!fs.existsSync(env_path)) env_path = undefined

    // load env
    if (env_path) console.log(`Service "${this.getPackageConfig()?.name}" use ${env_path}`);
    else console.warn(`Service "${this.getPackageConfig()?.name}" running without env file`);
    dotenv.config({
      path: env_path
    });
  }

  getPackageConfig() {
    return this.config.packagejson as any;
  }

  getEnv(key: string, defaultValue?: string): string|undefined {
    return process.env[key] || defaultValue;
  }

  createHttpServer(config: MicroserviceServiceHttpServerConfig) {
    const app = express();
    
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
        console.log(`Service "${this.getPackageConfig()?.name}" HTTP Listening on port ${config.port}`);
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