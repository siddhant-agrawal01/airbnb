import dotenv from "dotenv";
import { dbConfig } from "./index";

dotenv.config();

interface DBConfig {
  url: string;
  dialect: "postgres";
  dialectOptions?: {
    ssl: {
      require: boolean;
      rejectUnauthorized: boolean;
    };
  };
}

interface Config {
  development: DBConfig;
  test: DBConfig;
  production: DBConfig;
}

const config: Config = {
  development: {
    url: process.env.DATABASE_URL as string,
    dialect: "postgres",
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false, // required for Neon
      },
    },
  },

  test: {
    url: process.env.DATABASE_URL as string,
    dialect: "postgres",
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
  },

  production: {
    url: process.env.DATABASE_URL as string,
    dialect: "postgres",
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
  },
};

export default config;
