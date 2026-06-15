-- CreateTable
CREATE TABLE "tb_tasks" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "description" TEXT NOT NULL,
    "project_id" INTEGER NOT NULL,
    "done" BOOLEAN NOT NULL DEFAULT false,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL,
    CONSTRAINT "tb_tasks_project_id_fkey" FOREIGN KEY ("project_id") REFERENCES "tb_projects" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
