/*
  Warnings:

  - The `reactions` column on the `Pin` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "Pin" DROP COLUMN "reactions",
ADD COLUMN     "reactions" TEXT[];

-- DropEnum
DROP TYPE "Reaction";
