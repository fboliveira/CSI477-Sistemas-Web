// 
// npm install @prisma/adapter-better-sqlite3 better-sqlite3

import { PrismaClient } from "../generated/prisma/client.js"
import { PrismaBetterSqlite3 } from '@prisma/adapter-better-sqlite3';

const adapter = new PrismaBetterSqlite3({
  url: process.env.DATABASE_URL ?? 'file:./aplicacao.sqlite',
});

const prisma = new PrismaClient({ adapter });

export { prisma }