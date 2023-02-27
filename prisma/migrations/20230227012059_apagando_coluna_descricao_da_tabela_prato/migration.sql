/*
  Warnings:

  - You are about to drop the column `desc` on the `pratos` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_pratos" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "obs" TEXT NOT NULL,
    "state" TEXT NOT NULL,
    "data" DATETIME NOT NULL,
    "valor" REAL NOT NULL,
    "mesa_id" INTEGER,
    CONSTRAINT "pratos_mesa_id_fkey" FOREIGN KEY ("mesa_id") REFERENCES "mesas" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_pratos" ("data", "id", "mesa_id", "name", "obs", "state", "valor") SELECT "data", "id", "mesa_id", "name", "obs", "state", "valor" FROM "pratos";
DROP TABLE "pratos";
ALTER TABLE "new_pratos" RENAME TO "pratos";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
