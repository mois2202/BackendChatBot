import dotenv from 'dotenv';

dotenv.config()

const config = {
    env: process.env.NODE_ENV || "development",
    debug: process.env.APP_DEBUG === "true",
    port: parseInt(process.env.PORT || "3000"),
    getDatabaseConfig: () => ({
        database: process.env.DB_NAME || 'mydb', 
        username: process.env.DB_USERNAME || 'postgres',
        password: process.env.DB_PASSWORD || 'password',
        host: process.env.DB_HOST || 'localhost',
        port: parseInt(process.env.DB_PORT || "5432"),
    }),
};

export default config;