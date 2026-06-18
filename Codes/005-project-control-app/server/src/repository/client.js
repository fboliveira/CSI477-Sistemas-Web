import { PrismaClient } from "../generated/prisma/client.js"
import { PrismaBetterSqlite3 } from "@prisma/adapter-better-sqlite3"

const adapter = new PrismaBetterSqlite3({
    url: "file:./project-control.db"
})

const prisma = new PrismaClient({
    adapter
})

export { prisma }