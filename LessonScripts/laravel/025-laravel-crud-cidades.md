# CSI606 - Sistemas WEB I - SI-06
## Período Letivo Remoto
### Prof. Fernando Bernardes de Oliveira, Ph.D.

---

## Roteiro da Aula 25

### Olá! Bom dia, boa tarde, boa noite! :smiley:   

Na aula de número 25 do curso, nós faremos o CRUD (*Create, Read, Update* e *Delete*) para a tabela de `cidades`. Essa tabela tem uma chave estrangeira da tabela de `estados`. Além disso, todos os relacionamentos entre os modelos foram construídos.

O exemplo do vídeo foi feito com o *SQLite*. Entretanto, você pode reproduzir o código utilizando qualquer banco de dados suportado pelo *Laravel*.

Para esta aula, teremos as seguintes atividades. Estes itens se referem aos elementos definidos no Moodle.

1.  **Tópico 06 - Laravel**

    1.  Assista ao vídeo **Laravel - Cidade / CRUD** e reproduza o código também. 

    2.  Conteúdos complementares estão disponíveis [aqui](../../Lectures/laravel.md#controllers). Reproduza e teste, sempre que possível, os códigos apresentados nos textos.

### Exercícios

Como exercício prático e de revisão, você criará no banco de dados duas entidades, a tabela de `pessoas` e a tabela de `compras`. O objetivo dessas entidades é associar a compra de produtos por pessoas.

As tabelas possuem a seguinte estrutura (considere além dos campos descritos as colunas de *timestamps* do *Laravel*.)

1.  `pessoas`:

    -   **id**: inteiro, autoincremento;
    -   **nome**: texto, tamanho 100, não nulo;
    -   **cidade_id**: inteiro (chave estrangeira de `cidades.id`).
    
2.  `compras`:

    -   **id**: inteiro, autoincremento;
    -   **pessoa_id**: inteiro (chave estrangeira de `pessoas.id`);
    -   **produto_id**: inteiro (chave estrangeira de `produtos.id`);
    -   **data**: data/hora.

Implemente o CRUD para cada uma dessas tabelas, considerando todos os elementos necessários do contexto MVC para isso. Crie também relatórios para totalizar as compras: 

    1. Por pessoa
    2. Por data
    3. Por produto

Você pode mudar a maneira como as informações são apresentadas. Não precisa, necessariamente, ser do mesmo modo que foi introduzido no vídeo.

Os arquivos criados e/ou modificados deverão ser atualizados no seu repositório no GitHub. Utilize o projeto do Laravel criado na pasta `Atividades/exercicios/laravel`.

### Controle de frequência

A frequência da aula de hoje será apurada pela submissão dos arquivos indicados.  

[Índice](../README.md#índice)  
