import { PrismaClient } from "@prisma/client";

export const prisma = new PrismaClient({
  log: ['query']//para verificar a cada operação o log sendo realizado
});