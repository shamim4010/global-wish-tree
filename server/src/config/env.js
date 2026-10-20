import dotenv from "dotenv";

dotenv.config();

const required = ["DATABASE_URL", "CLIENT_URL"];
const missing = required.filter((key) => !process.env[key]);

if (missing.length > 0) {
  throw new Error(`Missing required environment variables: ${missing.join(", ")}`);
}

export const env = {
  nodeEnv: process.env.NODE_ENV || "development",
  isProduction: process.env.NODE_ENV === "production",
  port: Number(process.env.PORT) || 5050,
  clientUrl: process.env.CLIENT_URL,
  databaseUrl: process.env.DATABASE_URL,
};