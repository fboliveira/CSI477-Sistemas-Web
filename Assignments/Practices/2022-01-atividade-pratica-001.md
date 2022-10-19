# CSI606 - Sistemas WEB I - SI-06

## Período Letivo 2022/1

### Prof. Fernando Bernardes de Oliveira, Ph.D.

---

## **Atividade Prática 1 - valor: 12,0 pontos**

### Instruções/regras

1. A atividade é **INDIVIDUAL**.

1. Em caso de caracterização de cópia entre pessoas e/ou da internet (sem a devida referência), **TODOS** os envolvidos terão **nota zero** (0). Códigos utilizados por pessoas de outros semestres também causam a eliminação da atividade.

1. **Entrega:**

    - **GitHub**: código-fonte e afins. Insira os arquivos criados na pasta **Atividades/atividade-pratica-01-server** no seu repositório no GitHub.
    - Data: **30/09/2022, até 23:59 horas**.

### Desenvolvimento: Sistema de Controle de Doação de Sangue

O objetivo deste sistema é controlar o processo de doação de sangue numa determina instituição. O diagrama do banco de dados completo é apresentado na [figura abaixo](../../Codes/006-aplicacao/database-model/CSI606-sistema-doacao-sangue.png). Você pode acessar também o modelo definido a partir do [DBDiagram](https://dbdiagram.io/d/630d077e0911f91ba5ecf743).

![Diagrama completo do banco de dados](../../Codes/006-aplicacao/database-model/CSI606-sistema-doacao-sangue.png)

Este modelo será utilizado para as atividades práticas e a prova. O escopo de cada atividade será definido apropriadamente.

No caso da **Atividade 1** é esperado que vocês desenvolvam uma API RESTful para as seguintes entidades: *pessoas*, *tipos_sanguineos*, *locais_coleta* e *doacoes*. Vocês pode utilizar o desenvolvimento de *estados* e *cidades* que foi realizado em sala de aula. Considere as seguintes operações:

- Inserir - *create*
- Atualizar - *update*
- Excluir - *delete*
- Recuperar - *read* - todos os itens, por *id* e por *nome* (quando se aplicar).

É sugerido que vocês utilizem **Node.js com TypeScript** para esse desenvolvimento. Contudo, isso não é necessário. Vocês podem, inclusivem, utilizar outas tecnologias às suas preferências. É sugerido também que vocês estudem outras arquiteturas de software, além da estrutura que foi utilizada.

Sintam-se livres para as escolhas e documentem, por gentileza, utilizando o **README.md** das suas respectivas atividades, as tecnologias, as arquiteturas, os passos para execução e demais itens que julgarem importantes.

---

## **Atividade Prática 2 - valor: 18,0 pontos**

A Atividade Prática 2 consiste na implementação da interface Web (em *React* ou algum *framework* de sua preferência)

1. **Entrega:**

    - **GitHub**: código-fonte e afins. Insira os arquivos criados na pasta **Atividades/atividade-pratica-02-web** no seu repositório no GitHub.
    - Data: **24/10/2022, até 23:59 horas**.

---

## **Prova - valor: 25,0 pontos**

A Prova consiste na implementação tanto do *backend* quanto do *frontend* das ações de recuperar (*read, get*) e inserir (*create*) para as seguintes entidades:

- *produtos*
- *distribuicoes*
- *unidades*

Apenas as duas operações devem ser implementadas. As demais não são necessárias.

1. **Entrega:**

    - **GitHub**: código-fonte e afins. Insira os arquivos criados nas pastas no seu repositório no GitHub conforme a funcionalidade:
        - *Backend*: **Atividades/atividade-pratica-01-server**  
        - *Frontend*: **Atividades/atividade-pratica-02-web**  
    - Data: **24/10/2022, até 23:59 horas**.

---

**Uma excelente atividade para vocês!**

---

***Let's code!***

![Let's code!](https://media.giphy.com/media/USV0ym3bVWQJJmNu3N/giphy.gif)

![Happy coding](https://media.giphy.com/media/3bu85lsWhBTlWcOMN6/giphy.gif)

> ***What we have to learn to do, we learn by doing.***  
>
> --- Aristóteles.
