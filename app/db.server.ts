import { PrismaClient } from "@prisma/client";

// Check if PrismaClient is already initialized globally
declare global {
  var prisma: PrismaClient | undefined;
}

// Initialize PrismaClient only once
const prisma = global.prisma || new PrismaClient();

if (process.env.NODE_ENV !== "production") {
  // In development mode, use a global variable to avoid multiple instances
  global.prisma = prisma;
}

export default prisma;
