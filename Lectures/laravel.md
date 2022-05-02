# Laravel

O [Laravel](https://laravel.com/) é um *framework* MVC (*Model-View-Controller*) para desenvolvimento Web criado por [Taylor Otwell](https://github.com/taylorotwell). As considerações descritas aqui se referem à versão 9.x. Você pode verificar as notas de cada *release* [aqui](https://laravel.com/docs/releases). Além disso, este documento está em constante atualização.

## Estrutura de diretórios e arquivos principais

Os principais diretórios e arquivos utilizados no nosso contexto serão descritos a seguir. A estrutura completa de arquivos e diretório do *framework* pode ser encontrada [aqui](https://laravel.com/docs/structure).

---

### Raiz da aplicação

Na raiz da aplicação, os seguintes arquivos podem ser encontrados:

- [`.env`]: arquivo com as varíaveis de configuração do ambiente. As definições das variáveis e como elas podem ser utilizadas podem ser encontradas [aqui](https://laravel.com/docs/configuration#environment-configuration).

- [`artisan`]: interface via terminal com diversos comandos. Digite `php artisan` (ou `php artisan list`) para obter a lista de todas as opções disponíveis.

---

### Pasta `app`

A pasta `app` conterá a maior parte do código da aplicação.

- [`app/Models`]: definição dos modelos da aplicação, responsáveis pela manipulação das entidades de banco de dado de maneira transparente.

- [`app/Http/Controllers`]: definição das regras de negócio da aplicação, em especial, os *resource controllers*.

---

### Pasta `database`

Na raiz da pasta `database` é possível criar um arquivo do `SQLite` para armazenar os dados. Para outros SGBDs, isso não é necessário. Para as demais pastas, temos:

- [`database/factories`]: `models factories` para a [geração de dados de teste](https://laravel.com/docs/database-testing#creating-factories) no banco de dados.

- [`database/migrations`]: permite, o gerenciamento da estrutura do banco de dados, com a criação e a atualização de tabelas, relacionamentos e demais itens. Os `migrations` funcionam como um processo de [controle de versão do banco](https://laravel.com/docs/migrations#introduction).

- [`database/seeders`]: é possível [popular um banco com dados iniciais](https://laravel.com/docs/seeding). É possível utilizar as `factories` para fazer isso ou inserir um conjunto necessário de dados básicos para a aplicação funcionar.

---

### Pasta `public`

Esta pasta é a raiz do servidor. É nela em são incluídos os `assets` (css, js, imagens e afins).  Utilize o [helper asset()](https://laravel.com/docs/helpers#method-asset) para a inclusão correta do link para esses arquivos.

---

### Pasta `resources`

O principal recurso encontrado é a pasta com as `views`. Toda a estrutura de apresentação é incluída a partir dela.

Existem também outras subpastas, como `css` e `js`. Nelas são incluídas versões do CSS com LESS ou SASS, por exemplo, e do JavaScript não minificado ou de algum outro framework. São as versão não "compiladas". Quando o processo de compilação é realizado, a versão resultante deve ser incluída na pasta `public`. Veja mais [aqui](https://laravel.com/docs/structure#the-resources-directory).

---

### Pasta `storage`

Esta pasta armazena as versões compiladas dos templates do Blade, arquivos de logs, cache, dentre outros.

---

### Pasta `vendor`

Armazena as dependência do projeto gerenciadas pelo `Composer`.

---

## Roteiro básico para criação de uma aplicação

1. Criar o projeto: `laravel new <projeto>`
1. Configurar o ambiente: `.env`
1. Criar o banco de dados, se necessário.
1. Criar o `model` e demais elementos: `php artisan make:model -a <NomeDoModel>`
1. Definir o `migration`: pasta `database/migrations`.
1. Executar o `migrate`: `php artisan migrate`
1. Implementar a `factory`: pasta `database/factories`.
1. Implementar o `seeder`: pasta `database/seeders`.
1. Configurar as rotas: arquivo `routes/web.php`
1. Verificar as rotas: `php artisan route:list`
1. Implementar no `Model` os atributos `$fillable` e `$guarded`, além dos relacionamentos, se necessário.
1. Implementar os métodos no `controller` [`app/Http/Controllers`] e as `views` [`resources/views`] correspondentes.
1. Executar a aplicação: `php artisan serve`

Agora é só ~~corrigir os 84095840 bugs~~ alegria! (Não se preocupe, isso é normal!)

E não se esqueça: ***"A [documentação](https://laravel.com/docs/) é o meu guia e ~~quase~~ nada me faltará."*** (Laravel 9:2) :smiley:

![Parabéns!](https://media.giphy.com/media/J5Xr9k7qK5KGRi45vp/giphy.gif)

### Laravel Sail

Uma dica fantástica do [Víctor Ballestrini](https://laravel.com/docs/releases) para agilizar o processo de criação de uma aplicação por meio de *container Docker* é utilizar o [Laravel Sail](https://laravel.com/docs/sail). É possível criar um ambiente de desenvolvimento padrão sem precisar instalar as dependências do Laravel.

O Sail também pode ser utilizado em [aplicações existentes](https://laravel.com/docs/sail#installing-sail-into-existing-applications).

## Referências adicionais

### Migrations

- [Artisan Console](https://laravel.com/docs/artisan)

- [Database: Migrations](https://laravel.com/docs/migrations)

### Factories

- [Creating Factories](https://laravel.com/docs/database-testing#creating-factories)

- [PHP Faker](https://github.com/FakerPHP/Faker/)

### Model

- [Model: Eloquent](https://laravel.com/docs/eloquent)

- [Inserting & Updating Models](https://laravel.com/docs/eloquent#inserting-and-updating-models)

- [Eloquent: Relationships](https://laravel.com/docs/eloquent-relationships)

- [Soft deleting](https://laravel.com/docs/eloquent#soft-deleting)

- [Lumen - PHP Micro-Framework by Laravel](https://lumen.laravel.com/)

- [PHP Traits](https://www.php.net/manual/en/language.oop5.traits.php)

### Routes e Views

- [Request Lifecycle](https://laravel.com/docs/lifecycle)

- [Routing](https://laravel.com/docs/routing)

- [Views](https://laravel.com/docs/views)

- [Blade Templates](https://laravel.com/docs/blade)

- [Blade: Defining A Layout](https://laravel.com/docs/blade#defining-a-layout)

### Controllers

- [Controllers](https://laravel.com/docs/controllers)

- [HTTP Session](https://laravel.com/docs/session)

- [Session: Flash Data](https://laravel.com/docs/session#flash-data)

### Laracasts

- [Laracasts](https://laracasts.com)

- [Laracasts: Class-Based Model Factories](https://laracasts.com/series/whats-new-in-laravel-8/episodes/4)

- [Laracasts: Model Factory Relationships](https://laracasts.com/series/whats-new-in-laravel-8/episodes/5)

### Autenticação e autorização

- [Authentication](https://laravel.com/docs/authentication)

- [Middleware](https://laravel.com/docs/middleware)

- [Jetstream](https://jetstream.laravel.com/)

- [Laracasts: Jetstream](https://laracasts.com/series/whats-new-in-laravel-8/episodes/10)

- [Authorization](https://laravel.com/docs/authorization)

- [Vue.js](https://vuejs.org/)

### Outras Referências

- [Especializa TI - Curso de Laravel 9 Gratuito](https://academy.especializati.com/curso/laravel-9-gratuito)

- [Monolitos – Hipsters #173](https://hipsters.tech/monolitos-hipsters-173/)

- [O que são Microsserviços? (Microservices)](https://youtu.be/jSnLOoGjQ80)

- [PodProgramar#63 – Webservices: SOAP e REST](https://mundopodcast.com.br/podprogramar/63-webservices/)

- [Semantic Versioning](https://semver.org/)
