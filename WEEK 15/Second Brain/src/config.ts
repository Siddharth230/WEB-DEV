import { env } from './validateEnv'; 

export const MONGOOSE_URL = env.DATABASE_URL;

export const JWT_PASSWORD = env.JWT_PASSWORD;
