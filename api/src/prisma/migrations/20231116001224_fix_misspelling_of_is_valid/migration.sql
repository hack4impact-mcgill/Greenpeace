/*
  Warnings:

  - You are about to drop the column `isVaid` on the `Pin` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Pin" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "coordinateX" REAL NOT NULL,
    "coordinateY" REAL NOT NULL,
    "isValid" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_Pin" ("coordinateX", "coordinateY", "createdAt", "description", "id", "name") SELECT "coordinateX", "coordinateY", "createdAt", "description", "id", "name" FROM "Pin";
DROP TABLE "Pin";
ALTER TABLE "new_Pin" RENAME TO "Pin";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
