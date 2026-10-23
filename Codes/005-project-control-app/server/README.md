# Comandos

```shell
npm i -D typescript tsx @types/node @types/express
npm install-scripts approve --all
npx tsc --init
npx tsx watch src/server.ts
```

## Prisma

[Prisma SQLite quickstart](https://www.prisma.io/docs/v7/prisma-orm/quickstart/sqlite)

```shell
npm i -D prisma@prev @types/better-sqlite3
npm i @prisma/client@7 @prisma/adapter-better-sqlite3
npm install-scripts approve --all
npx prisma init --datasource-provider sqlite
npx prisma migrate dev
```
