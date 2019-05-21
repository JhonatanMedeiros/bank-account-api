import * as dotenv from 'dotenv';

dotenv.config();

interface IConfig {
  port: string | number;
  database: {
    MONGODB_URI: string;
    MONGODB_DB_MAIN: string;
  };
  log: {
    enable: boolean;
    MONGODB_URI: string;
    MONGODB_DB_MAIN: string;
  };
  secret: string;
}

const NODE_ENV: string = process.env.NODE_ENV || 'development';

const development: IConfig = {
  port: process.env.PORT || 3000,
  database: {
    MONGODB_URI: process.env.MONGODB_URI || 'mongodb://localhost:27017/',
    MONGODB_DB_MAIN: process.env.MONGODB_DB_MAIN || 'account_bank_db'
  },
  log: {
    enable: !!(process.env.LOGS || true),
    MONGODB_URI: process.env.LOGS_MONGODB_URI || 'mongodb://localhost:27017/',
    MONGODB_DB_MAIN: process.env.LOGS_MONGODB_DB_MAIN || 'account_bank_log_db'
  },
  secret: process.env.SECRET || '@QEGTUI'
};

const production: IConfig = {
  port: process.env.PORT || 3000,
  database: {
    MONGODB_URI: process.env.MONGODB_URI || 'mongodb://production_uri/',
    MONGODB_DB_MAIN: process.env.MONGODB_DB_MAIN || 'account_bank_db'
  },
  log: {
    enable: !!(process.env.LOGS || true),
    MONGODB_URI: process.env.LOGS_MONGODB_URI || 'mongodb://production_uri/',
    MONGODB_DB_MAIN: process.env.LOGS_MONGODB_DB_MAIN || 'account_bank_log_db'
  },
  secret: process.env.SECRET || '@QEGTUI'
};

const config: { [name: string]: IConfig } = { development, production };

export default config[NODE_ENV];
