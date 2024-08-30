-- CreateTable
CREATE TABLE "Cidade" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "estado_id" INTEGER NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL,
    CONSTRAINT "Cidade_estado_id_fkey" FOREIGN KEY ("estado_id") REFERENCES "estados" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
