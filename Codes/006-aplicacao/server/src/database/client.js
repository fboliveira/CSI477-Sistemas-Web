import { PrismaClient } from "@prisma/client";

// https://www.prisma.io/docs/concepts/components/prisma-client/working-with-prismaclient/logging
const prismaClient = new PrismaClient({
    log: ['query', 'info', 'warn', 'error'],
  });

export { prismaClient }