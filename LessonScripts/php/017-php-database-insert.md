# CSI606 - Sistemas WEB I - SI-06
## Período Letivo Remoto
### Prof. Fernando Bernardes de Oliveira, Ph.D.

---

## Roteiro da Aula 17

### Olá! Bom dia, boa tarde, boa noite! :smiley:    

Na aula de número $17$ do curso, nós faremos a inserção de dados enviados a partir de um formulário utilizando a interface de conexão *PHP Data Objects (PDO)*. Veremos também questões sobre validações do lado do cliente e do servidor, além dos processos de transações.

O exemplo do vídeo foi feito com o *SQLite*. Entretanto, você pode reproduzir o código utilizando qualquer banco de dados suportado pelo PDO.

Para esta aula, teremos as seguintes atividades. Estes itens se referem aos elementos definidos no Moodle.

1.  **Tópico 05 - PHP: Hypertext Preprocessor**

    1.  Assista ao vídeo **PHP - Inserção de dados no banco** e reproduza o código também. 

    2.  Conteúdos complementares estão disponíveis [aqui](../../Lectures/php.md). Reproduza e teste, sempre que possível, os códigos apresentados nos textos.

### Exercícios

Como exercício prático e de revisão, você criará no banco de dados uma tabela chamada `produtos` com a seguinte estrutura.

-   `id`: inteiro, autoincremento;

-   `nome`: texto, tamanho 100, não nulo;

-   `um`: texto, tamanho 3, não nulo.

Os campos representam o código, o nome/descrição do produto e a unidade de medida (peça-pç, quilo-kg, litro-l, metro-m, dentre outras). Você pode também criar outros campos, caso seja necessário.

Crie uma página (*view*) para apresentar os dados cadastrados utilizando tabelas (`<table>`). Crie também o recurso para inserir dados no banco, conforme realizado no vídeo. O formulário deve ser validado e essa validação deve acontecer também do lado do servidor. Personalize todas as páginas com CSS/Bootstrap. 

Os arquivos criados e/ou modificados deverão ser atualizados no seu repositório no GitHub. Dentro da pasta `Atividades/exercicios`, crie uma pasta com o nome `exercicio-08` e insira todos os arquivos desta atividade.

### Controle de frequência

A frequência da aula de hoje será apurada pela submissão dos arquivos indicados.  

[Índice](../README.md#índice)