import { PrismaClient } from "@/generated/prisma";

const globalForPrisma = global as unknown as {
    prisma: PrismaClient
}
export const prisma = globalForPrisma.prisma || new PrismaClient()
if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma


//NEXT JS 5 Hot reloads and everytime an hot reload happens Primsa Client Re-initialized
//SO this is why we are using prisma as kind of a ternary