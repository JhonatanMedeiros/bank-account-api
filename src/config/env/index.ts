import { config as dotConfig } from 'dotenv';

dotConfig();

interface IConfig {
  port: string | number;
  database: {
    MONGODB_DOMAIN: string;
    MONGODB_DB_MAIN: string;
    MONGODB_DB_USER: string;
    MONGODB_DB_PASS: string;
  };
  log: {
    enable: boolean;
    MONGODB_URI: string;
    MONGODB_DB_MAIN: string;
  };
  secret: string;
}

const NODE_ENV: string = process.env.NODE_ENV || 'development';

const test: IConfig = {
  port: process.env.PORT || 3003,
  database: {
    MONGODB_DOMAIN: process.env.MONGODB_DOMAIN || 'localhost:17017',
    MONGODB_DB_MAIN: process.env.MONGODB_DB_MAIN || 'account_bank_db_test',
    MONGODB_DB_USER: process.env.MONGODB_DB_USER || 'user',
    MONGODB_DB_PASS: process.env.MONGODB_DB_PASS || '123'
  },
  log: {
    enable: !!(process.env.LOGS || true),
    MONGODB_URI: process.env.LOGS_MONGODB_URI || 'mongodb://localhost:17017/',
    MONGODB_DB_MAIN: process.env.LOGS_MONGODB_DB_MAIN || 'account_bank_log_db_test'
  },
  secret: process.env.SECRET || '@QEGTUI'
};

const development: IConfig = {
  port: process.env.PORT || 3000,
  database: {
    MONGODB_DOMAIN: process.env.MONGODB_DOMAIN || 'localhost:17017',
    MONGODB_DB_MAIN: process.env.MONGODB_DB_MAIN || 'account_bank_db',
    MONGODB_DB_USER: process.env.MONGODB_DB_USER || 'user',
    MONGODB_DB_PASS: process.env.MONGODB_DB_PASS || '123'
  },
  log: {
    enable: !!(process.env.LOGS || true),
    MONGODB_URI: process.env.LOGS_MONGODB_URI || 'mongodb://localhost:17017/',
    MONGODB_DB_MAIN: process.env.LOGS_MONGODB_DB_MAIN || 'account_bank_log_db'
  },
  secret: process.env.SECRET || '@QEGTUI'
};

const production: IConfig = {
  port: process.env.PORT || 3000,
  database: {
    MONGODB_DOMAIN: process.env.MONGODB_DOMAIN || 'production_uri',
    MONGODB_DB_MAIN: process.env.MONGODB_DB_MAIN || 'account_bank_db',
    MONGODB_DB_USER: process.env.MONGODB_DB_USER || 'user',
    MONGODB_DB_PASS: process.env.MONGODB_DB_PASS || '123'
  },
  log: {
    enable: !!(process.env.LOGS || true),
    MONGODB_URI: process.env.LOGS_MONGODB_URI || 'mongodb://production_uri/',
    MONGODB_DB_MAIN: process.env.LOGS_MONGODB_DB_MAIN || 'account_bank_log_db'
  },
  secret: process.env.SECRET || '@QEGTUI'
};

const config: { [name: string]: IConfig } = { development, production, test };

export default config[NODE_ENV];
