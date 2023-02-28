-- CreateTable
CREATE TABLE "pratos" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "obs" TEXT NOT NULL,
    "state" TEXT NOT NULL,
    "data" DATETIME NOT NULL,
    "valor" REAL NOT NULL,
    "number" INTEGER NOT NULL
);
