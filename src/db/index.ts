import { PrismaClient } from "@prisma/client";

declare global {
  var cachdPrisma: PrismaClient;
}

let prisma: PrismaClient;

if (process.env.NODE_ENV === "production") {
  prisma = new PrismaClient();
} else {
  if (!global.cachdPrisma) {
    global.cachdPrisma = new PrismaClient();
  }

  prisma = global.cachdPrisma;
}

export const db = prisma;
