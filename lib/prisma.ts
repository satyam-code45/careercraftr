import {PrismaClient} from "@prisma/client"

declare global {
    var prisma: PrismaClient | undefined;
  }

export const db = globalThis.prisma || new PrismaClient();

if (process.env.NODE_ENV != 'production') {
    globalThis.prisma = db;
}

//globalThis.prisma - This is a global variable ensures that the Prisma Client instance is reused across hot reloads during development.
//without this each time our application reloads, a new instance of the Prisma Client would be created, potentially leading to connection issues. 