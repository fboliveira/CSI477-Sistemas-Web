-- CreateTable
CREATE TABLE "pessoas" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "cidade_id" INTEGER NOT NULL,
    CONSTRAINT "pessoas_cidade_id_fkey" FOREIGN KEY ("cidade_id") REFERENCES "cidades" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "locais_coleta" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "cidade_id" INTEGER NOT NULL,
    CONSTRAINT "locais_coleta_cidade_id_fkey" FOREIGN KEY ("cidade_id") REFERENCES "cidades" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Doacao" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "pessoa_id" INTEGER NOT NULL,
    "local_id" INTEGER NOT NULL,
    CONSTRAINT "Doacao_pessoa_id_fkey" FOREIGN KEY ("pessoa_id") REFERENCES "pessoas" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Doacao_local_id_fkey" FOREIGN KEY ("local_id") REFERENCES "locais_coleta" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
