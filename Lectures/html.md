# ***HyperText Mark-up Language*** - **HTML**

## Nota de uso

Este material foi produzido a partir das recomendações do W3C, e tem
como principal referência textos e exemplos retirados de
<https://html.spec.whatwg.org/>.

## Introdução

- Criado por [Tim Berners-Lee](https://www.w3.org/People/Berners-Lee/);

- **Versão atual?**: HTML 5.2: tornou-se obsoleto.

- Após a versão 5.2, o HTML passou a ter atualizações frequentes: ***Living Standard***.

- Assim, não existe um número de versão - apenas a última atualização.

### Documentação oficial: **HTML - *Living Standard:***

- ***Web Hypertext Application Technology Working Group (WHATWG)***: <https://whatwg.org/faq>

- [W3C and WHATWG to work together to advance the open Web platform](https://www.w3.org/blog/2019/05/w3c-and-whatwg-to-work-together-to-advance-the-open-web-platform/)

- <https://html.spec.whatwg.org/>

### **Versões anteriores**

- Todas são obsoletas conforme o *Living Standard*.

- HTML 5.2 - *W3C Proposed Recommendation, 02 November 2017*

- HTML 5 - *W3C Recommendation 28 October 2014*

- HTML 4.01 - *W3C Recommendation 24 December 1999*

## **HTML5**

- **Novos elementos** - melhor estruturação, mídia, dentre outros;

- **Novos atributos**

- **Itens obsoletos** - <https://html.spec.whatwg.org/#obsolete>

- **Syntax**: <https://html.spec.whatwg.org/#syntax>

- **Elements**: <https://html.spec.whatwg.org/#elements-2>

- **Attributes**: <https://html.spec.whatwg.org/#attributes-2>

- **Tables**: <https://html.spec.whatwg.org/#tables>

- **Forms**: <https://html.spec.whatwg.org/#forms>

- **The W3C Markup Validation Service**: <http://validator.w3.org/>

- **WHATWG - HTML Conformance Checkers**: <https://whatwg.org/validator/>

- **MDN Web Docs *(previously known as MDN - the Mozilla Developer Network)***: <https://developer.mozilla.org/en-US/docs/Web/HTML>

### Web Accessibility Initiative (WAI)

- <https://www.w3.org/WAI/>

- *Accessible Rich Internet Applications (WAI-ARIA)*

- <https://www.w3.org/WAI/standards-guidelines/aria/>

  = <https://www.w3.org/TR/wai-aria/>

  = <https://w3c.github.io/aria/>

### *Uniform (~~Universal~~) Resource Identifier* - **URI**

- *Uniform Resource Locator (URL)*: a URL is a specific type of URI that indicates the location of a resource on the web and describes how to access it.

- URLs typically consist of three pieces:

  1. The naming **scheme** of the mechanism used to access the resource.
  1. The name of the **machine hosting** the resource.
  1. The name of the resource itself, given as a **path**.

- Example: <http://www.w3.org/TR>

- This URL may be read as follows:

    1. There is a document **available** via the **HTTP protocol**;
    1. This is residing on the **machine** [www.w3.org](www.w3.org), accessible via the **path** "/TR".

- **Other schemes** you may see in HTML documents include "**mailto**" for email and "**ftp**" for FTP.

- **Fragment identifiers**:

  - This kind of URL ends with "\#" followed by an anchor identifier (called the fragment identifier).

  - <http://somesite.com/html/top.html#sectionb>

- **Relative URLs**:

  - A relative URL doesn't contain any naming scheme information.

  - Its path generally refers to a resource on the same machine as
        the current document.

```html
<a href="suppliers.html">Suppliers</a>
```

## Additional resources

### Fundamentals

- [**HTML Living Standard (documentação oficial)**](https://html.spec.whatwg.org/)

- [Código Fonte TV - HTML // Dicionário do Programador](https://youtu.be/4dQtz1PpY9A)

- [HTML Tutorial - How to Make a Super Simple Website](https://youtu.be/PlxWf493en4)

- [Learn HTML5 and CSS3 From Scratch - Full Course](https://youtu.be/mU6anWqZJcc)

- [MDN - HTML elements reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element)

- [MDN - HTML reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference)

- [MDN Web Docs - HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)

- [Rafaella Ballerini: 5 MINUTOS DE HTML PARA INICIAR EM PROGRAMAÇÃO!](https://youtu.be/3oSIqIqzN3M)

- [W3Schools: HTML5 Tutorial](https://www.w3schools.com/html/)

### Forms

- [MDN - input: The Input (Form Input) element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Input)

- [W3Schools: HTML Input Types](https://www.w3schools.com/html/html_form_input_types.asp)

### Tables

- [MDN - table: The Table element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/table)

- [W3Schools - HTML Tables](https://www.w3schools.com/html/html_tables.asp)

### Web Accessibility and UX

- [Acessibilidade na web – Hipsters Ponto Tech #463](https://www.hipsters.tech/acessibilidade-na-web-hipsters-ponto-tech-463/)
- [WCAG 2 Overview](https://www.w3.org/WAI/standards-guidelines/wcag/)
- [Web Content Accessibility Guidelines (WCAG)](https://www.wcag.com/)
- [Regulamentação de artigos da Lei Brasileira de Inclusão da Pessoa com Deficiência](https://www.gov.br/mdh/pt-br/navegue-por-temas/pessoa-com-deficiencia/acoes-e-programas/regulamentacao-de-artigos-da-lei-brasileira-de-inclusao-da-pessoa-com-deficiencia)

#### Tools and extensions

- [HTML_CodeSniffer](https://squizlabs.github.io/HTML_CodeSniffer/)
- [Lighthouse](https://developer.chrome.com/docs/lighthouse/overview)
- [axe DevTools - Web Accessibility Testing](https://chromewebstore.google.com/detail/axe-devtools-web-accessib/lhdoppojpmngadmnindnejefpokejbdd)
