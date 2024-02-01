-- CreateEnum
CREATE TYPE "Reaction" AS ENUM ('LIKE', 'DISLIKE', 'GOOD_VALUE', 'BAD_VALUE');

-- CreateTable
CREATE TABLE "Pin" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "coordinateX" DOUBLE PRECISION NOT NULL,
    "coordinateY" DOUBLE PRECISION NOT NULL,
    "isValid" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "category" TEXT NOT NULL DEFAULT '',
    "reactions" "Reaction"[],

    CONSTRAINT "Pin_pkey" PRIMARY KEY ("id")
);
