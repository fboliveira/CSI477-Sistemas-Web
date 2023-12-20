-- CreateTable
CREATE TABLE "cidades" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "estado_id" INTEGER NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL,
    CONSTRAINT "cidades_estado_id_fkey" FOREIGN KEY ("estado_id") REFERENCES "estados" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "LocalColeta" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "cidade_id" INTEGER NOT NULL,
    CONSTRAINT "LocalColeta_cidade_id_fkey" FOREIGN KEY ("cidade_id") REFERENCES "cidades" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
