import dotenv from "dotenv";

dotenv.config();

const PORT = Number(process.env.PORT) || 5000;

const NODE_ENV = process.env.NODE_ENV || "development";

export const env = {
  PORT,
  NODE_ENV,
};