import { z } from 'zod';
import dotenv from 'dotenv';

dotenv.config(); 

const envSchema = z.object({
  DATABASE_URL: z.string().url(),
  JWT_PASSWORD: z.string().min(10),
  NODE_ENV: z.enum(['development', 'production']).optional()
});

const parsed = envSchema.safeParse(process.env);

if (!parsed.success) {
  console.error('❌ Invalid environment variables:', parsed.error.format());
  process.exit(1);
}

export const env = parsed.data;
