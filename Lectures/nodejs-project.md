# Node.js Project

Como a construção do projeto é não-opinativa, ou seja, é possível definir qualquer arquitetura, uma estrutura será sugerida. Existe diferentes arquiteturas de software e metodologias que podem ser utilizadas (*Domain-driven design* - DDD, *Test-driven development* - TDD, hexagonal). Uma delas é apresentada [aqui](https://larswaechter.dev/blog/nodejs-rest-api-structure/). Você pode aprofundar os seus conhecimentos sobre Arquitetura de Software [Capítulo 7](https://engsoftmoderna.info/cap7.html) e demais assuntos relacionados no livro [Engenharia de Software Moderna](https://engsoftmoderna.info/) do Prof. Marco Tulio Valente (DCC/UFMG).

## Comandos básicos para a criação de um projeto com Express.js e Prisma

Você pode criar uma pasta qualquer para que os códigos sejam inseridos. Estou considerando que será utilizada a pasta ```server``` e os comandos em ```shell bash``` (padrão Unix). Além disso, estou utilizando o ```npm```, mas você pode fazer os comandos equivalentes com ```yarn```.

- Criar a pasta:  
    ```mkdir server```

- Acessar a pasta:  
    ```cd server```

- Iniciar o gerenciamento de pacotes com o arquivo *package.json*:  
    ```npm init```

- Criar as pastas conforme a sua arquitetura. Veja o modelo seguido [aqui](https://github.com/fboliveira/CSI477-Sistemas-Web/blob/master/Lectures/nodejs.md#estrutura-do-projeto-em-constru%C3%A7%C3%A3o).

- Instalar o Express.js:  
    ```npm install express```

- Instalar o Prisma CLI como dependência de desenvolvimento:  
    ```npm install prisma -D```

- Iniciar o projeto do Prisma:  
    ```npx prisma init```

- Você pode definir o tipo de banco de dados durante a inicialização. O padrão é o ```postgresql```.  
    ```npx prisma init --datasource-provider <postgresql, mysql, sqlite, sqlserver, mongodb or cockroachdb>```

- Após a inicialização, definir a URL de conexão com o banco de dados - ```DATABASE_URL``` - no arquivo ```.env```.

- Criar e/ou definir o banco de dados. Segue um exemplo com o **sqlite**:  
    ```touch prisma/aplicacao.sqlite```

- Neste momento, você pode definir o modelo do banco no arquivo ```prisma/schema.prisma``` ou recuperar o esquema a partir de um banco de dados existente: ```npx prisma db pull```.

- Instalar o *client* do Prisma:  
    ```npm install @prisma/client```

- Isso pode ser feito também da seguinte maneira:  
    ```npx prisma generate```

- Observe que o **Prisma Client** será gerado e você pode defini-lo, por exemplo, em ```src/database/client.js```:  

```javascript
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export { prisma }
```

- Após a definição do esquema, você precisa atualizar o banco de dados. Isso é definido como *migrations*:  
    ```npx prisma migrate dev```

- Você pode verificar os modelos criados com o Prisma Studio:  
    ```npx prisma studio```

- Agora, você pode definir o arquivo principal do servidor, os controllers de CRUD e as rotas:  

```js
src/server.js
src/controller/<model>/<crud>.js
src/routes/main.js
src/routes/<model>.js
```

- Você pode incluir os demais pacotes necessários. Por exemplo, o ```nodemon``` monitora o código e evita que o servidor precisa ser reinicializado toda vez que alguma coisa é alterada. Lembre-se de instalá-lo como dependência de desenvolvimento.

## API RESTful com ExpressJs

- REST: *REpresentational State Transfer.* (Roy Fielding).

- RESTful: web service que obedece a arquitetura e as restrições REST.

- Operações: *POST, GET, PUT* e *DELETE*.

- Etapas:

    1. Estrutura do projeto
    1. Configuração do [Express](https://expressjs.com/)
    1. [Modelo proposto do banco de dados](../Assignments/Pratices/database-model/)
    1. ORM - [Prisma.io](https://www.prisma.io)
    1. Construção das tabelas e relacionamentos
    1. *Migrations*
    1. Definição do CRUD: *controllers*
    1. Criação de rotas

### Estrutura principal do projeto *server API*

```text
node_modules
prisma
src
  |_ controller/*
        |_[C,R,U,D]_*_Controller.js
  |_ database
        |_ client.js  
  |_ middleware
  |_ model/*
  |_ routes/*
  |_ server.js
package.json
```
## Outras referências

- [Insomnia](https://insomnia.rest/)

- [REST Client (Huachao Mao)](https://marketplace.visualstudio.com/items?itemName=humao.rest-client)

- [Thunder Client - REST API Client](https://marketplace.visualstudio.com/items?itemName=rangav.vscode-thunder-client)


