# Comandos

```shell
npm i -D typescript tsx @types/node @types/express dotenv
npm install-scripts approve --all
npx tsc --init
npx tsx watch src/server.ts
```

## Prisma

[Prisma SQLite project](https://www.prisma.io/docs/v7/prisma-orm/quickstart/sqlite>)

```shell
npm install prisma@prev @types/node @types/better-sqlite3 -D
npm install @prisma/client@7 @prisma/adapter-better-sqlite3
npm install-scripts approve --all
npx prisma init --datasource-provider sqlite
```
