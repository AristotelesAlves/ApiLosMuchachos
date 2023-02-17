-- CreateTable
CREATE TABLE "mesas" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "mesa" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "pratos" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "desc" TEXT NOT NULL,
    "obs" TEXT NOT NULL,
    "state" TEXT NOT NULL,
    "data" DATETIME NOT NULL,
    "valor" REAL NOT NULL,
    "mesa_id" INTEGER,
    CONSTRAINT "pratos_mesa_id_fkey" FOREIGN KEY ("mesa_id") REFERENCES "mesas" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "mesas_id_key" ON "mesas"("id");
