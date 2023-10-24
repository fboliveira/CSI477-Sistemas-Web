# Cascading Style Sheets - CSS

## Definição

- Separar a **estrutura** da **apresentação**;

## Versões/*Levels*

- <https://www.w3.org/Style/CSS/>

- <https://www.w3.org/TR/CSS/>

- <http://www.w3.org/standards/techs/css>

- <https://www.w3.org/TR/CSS/#css-levels>

- A partir do *CSS Level 3* os módulos são criados/definidos separadamente.

- Não existe o *CSS Level 4* e além disso.

## Utilização - sintaxe

- **seletor ```{ declaração; declaração; }```**

- **declaração**: ```propriedade: valor```

```css
/* Seletor */
h1 { color: red; font-family: arial; }

/* Classe */
.generica { background-color: red; }

/* Seletor -- Classe */
p.maior { color: #C6C6C6; text-align: center; }

/* Id */
#codigo { background-color: #c6c6c6; color: blue; }
```

### Inline style

- Dependendo da maneira que é inserida, pode não ser uma prática adequada;

- Não separa a apresentação do conteúdo;

- Pode ser aplicável em situações que justifiquem a performance da aplicação / persepção do usuário;

```html
<p style="font-size: 20pt; color: #6666ff">
    Texto
</p>
```

### Embedded Style Sheets

- Observar as mesmas considerações para a utilização *inline*;

- Criado dentro do arquivo HTML;

- Estilo inserido na seção `<head>`;

```html
<html>
    <head>
        <title>Embedded Style Sheets</title>

        <style type = "text/css">
            h1    { font-family: tahoma, arial, times }
        </style>

    </head>
    <body>
        <h1>Teste de Embedded Style Sheets</h1>
    </body>
</html>
```

### Linking External Style Sheets

- Arquivo externo com estilos;

- Reutilização;

- A utilização pode ser mais adequada;

- `<a>`: links para outros documentos;

- `<link>`: arquivos externos utilizados no documento;

- Separar em múltiplos arquivos ou utilizar apenas um estilo geral?

---

```css
/* Comentário: Arquivo de estilos - estilos.css */
h1 { color: red;
        font-family: arial; }

h3 { color: black;
        font-family: tahoma; }
```

---

```html
<html>
    <head>
        <title>Embedded Style Sheets</title>

        <link rel = "stylesheet" type = "text/css"
            href = "estilos.css" />
    </head>

    <body>
        <h1>Teste de Embedded Style Sheets</h1>
    </body>

</html>
```

## Additional resources

### Fundamentals

- [Front-end Brasil](https://github.com/frontendbr)

- [MDN - CSS basics](https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/CSS_basics)

- [MDN - CSS Reference](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference)

- [MDN - CSS: Cascading Style Sheets](https://developer.mozilla.org/en-US/docs/Web/CSS)

- [MDN - Learn to style HTML using CSS](https://developer.mozilla.org/en-US/docs/Learn/CSS)

- [MDN Web Docs - CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)

- [Rafaella Ballerini: O QUE É CSS? (SELETORES, PROPRIEDADES E VALORES)](https://youtu.be/LWU2OR19ZG4)

- [W3C - CSS Validator Service](http://www.css-validator.org)

- [W3C - CSS](https://www.w3.org/Style/CSS/)

- [W3C Brasil - Curso de CSS](http://www.w3c.br/Cursos/CursoCSS3)

- [W3Schools - CSS Units](https://www.w3schools.com/cssref/css_units.asp)

### Selectors

- [MDN: :nth-child()](https://developer.mozilla.org/en-US/docs/Web/CSS/:nth-child)

- [MDN: Pseudo-classes](https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes)

- [MDN: Pseudo-elements](https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-elements)

- [MDN: Selector - Child combinator](https://developer.mozilla.org/en-US/docs/Web/CSS/Child_combinator)

- [W3Schools - CSS Selector Reference](https://www.w3schools.com/cssref/css_selectors.asp)

### Flexbox

- [Beginner’s Guide To CSS Grid And Flexbox](https://medium.com/youstart-labs/beginners-guide-to-choose-between-css-grid-and-flexbox-783005dd2412)

- [CSS Grid Garden](https://cssgridgarden.com/) (indicação de [Lucas Gomes](https://github.com/lmgomes91))

- [CSS-Tricks: A Complete Guide to Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)

- [Flexbox CSS: Guia Completo, Elementos e Exemplos](https://www.alura.com.br/artigos/css-guia-do-flexbox)

- [Flexbox Zombies](https://flexboxzombies.com/p/flexbox-zombies) (indicação de [Raphael Pavani](https://github.com/raphaelpavani))

- [MDN - CSS Flexible Box Layout](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout)

- [MDN - Relationship of grid layout to other layout methods](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout/Relationship_of_Grid_Layout)

### Frameworks

- [Bootstrap](https://getbootstrap.com/)

- [Google Material Design](https://material.io/design/)

- [Less CSS](http://lesscss.org/)

- [Sass CSS](https://sass-lang.com/)

- [Tailwind CSS](https://tailwindcss.com/)

- [W3Schools: Bootstrap 5 Tutorial (indicação de Rafaela Silva) #VersionUpdated](https://www.w3schools.com/bootstrap5/)

### Templates and themes

- [AdminLTE: Bootstrap Admin Dashboard Template](https://adminlte.io/)

- [Bootstrap Themes](https://themes.getbootstrap.com/)

- [Creative Tim: Bootstrap themes and templates](https://www.creative-tim.com/)

### Other resources

- [Podcast: Acessibilidade web – Hipsters #21](https://hipsters.tech/acessibilidade-web-hipsters-21/)

- [Podcast: CSS: Cansei de Ser Simples – Hipsters #09](https://hipsters.tech/css-cansei-de-ser-simples-hipsters-09/)

- [Rocketseat: UI Clone](https://www.youtube.com/playlist?list=PL85ITvJ7FLohTZv9cC5-PrZ39Q3cugWqp)
