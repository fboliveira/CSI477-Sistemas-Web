# PHP: Hypertext Preprocessor

## Introduction

- [**PHP** stands for *PHP: Hypertext Preprocessor*](https://www.php.net/manual/en/faq.general.php#faq.general.acronym)

- **General-purpose** scripting language.

- PHP is especially suited for web development.

- PHP is an HTML-embedded scripting language. ```<?php ... ?>```

### Types

PHP supports [ten primitive types](https://www.php.net/manual/en/language.types.intro.php).

- Scalar: bool, int, float and string.
- Compound: array, object, callable and iterable.
- Two special types: resource and NULL.

### Variables

- PHP is *loosely typed*.

- [Types](https://www.php.net/manual/en/language.types.php)

- The variable name is case-sensitive.

```php
<?php
    $name = 'Marie Curie';
?>
```

> If a file contains only PHP code, it is preferable to omit the PHP closing tag at the end of the file. This prevents accidental whitespace or new lines being added after the PHP closing tag, which may cause unwanted effects because PHP will start output buffering when there is no intention from the programmer to send any output at that point in the script. [Source](https://www.php.net/manual/en/language.basic-syntax.phptags.php)

- [PHP coding standards](https://raw.githubusercontent.com/php/php-src/master/CODING_STANDARDS.md)

### Escaping from HTML

```php
<?php if ($expression == true): ?>
  This will show if the expression is true.
<?php else: ?>
  Otherwise this will show.
<?php endif; ?>
```

### Performance

- [OPcache](https://www.php.net/manual/en/book.opcache.php)
- [How to use PHP OPCache ?](https://www.geeksforgeeks.org/how-to-use-php-opcache/)
- [Preloading](https://www.php.net/manual/en/opcache.preloading.php)

## Fundamentals

- [Caelum - Introdução ao PHP](https://www.caelum.com.br/apostila-html-css-javascript/introducao-a-php/)

- [PHP é interpretado?](https://youtu.be/QvmuWH4bOjE)

- [PHP-Figs - PHP Framework Interop Group](https://www.php-fig.org/)

- [PHP: The Right Way](https://phptherightway.com/)

- [php.net - Documentation](https://www.php.net/docs.php)

## Response and requests

- [W3Schools - PHP Form Handling](https://www.w3schools.com/PHP/php_forms.asp)

- [php.net - $_GET](https://www.php.net/manual/en/reserved.variables.get.php)

- [php.net - $_POST](https://www.php.net/manual/en/reserved.variables.post.php)

## PHP Data Objects (PDO)

- [Connections and Connection management](https://www.php.net/manual/en/pdo.connections.php)

- [PDO Drivers](https://www.php.net/manual/en/pdo.drivers.php)

- [Prepared statements and stored procedures](https://www.php.net/manual/en/pdo.prepared-statements.php)

- [The mysqli class](https://www.php.net/manual/en/class.mysqli)

- [The PDO class](https://www.php.net/manual/en/class.pdo)

- [Transactions and auto-commit](https://www.php.net/manual/en/pdo.transactions.php)

## Autoloading

- [Autoloading Classes](https://www.php.net/manual/en/language.oop5.autoload.php)

- [Composer: Autoloading](https://getcomposer.org/doc/01-basic-usage.md#autoloading)

- [Filipe Deschamps - SOLID fica FÁCIL com Essas Ilustrações](https://youtu.be/6SfrO3D4dHM)

- [PHP-FIG - PSR-4: Autoloader](https://www.php-fig.org/psr/psr-4/)

- [PHP: The Right Way - Dependency Injection](https://phptherightway.com/#dependency_injection)

- [Standard PHP Library - spl_autoload()](https://www.php.net/manual/en/function.spl-autoload.php)

## PHP Object-Oriented Programming

- [Classes and Objects](https://www.php.net/manual/en/language.oop5.php)

- [Constructors and Destructors](https://www.php.net/manual/en/language.oop5.decon.php)

- [Dependency Injection](https://phptherightway.com/#dependency_injection)

- [Magic Methods](https://www.php.net/language.oop5.magic)

- [Namespaces](https://www.php.net/manual/en/language.namespaces.php)

- [W3Schools: PHP OOP - Traits](https://www.w3schools.com/PHP/php_oop_traits.asp)

## SQLite

- [DB Browser for SQLite](https://sqlitebrowser.org/)

- [SQLite](https://sqlite.org/index.html)

- [VSCode extension: SQLite (alexcvzz)](https://marketplace.visualstudio.com/items?itemName=alexcvzz.vscode-sqlite)

## Additional resources

- [Filipe Deschamps - PHP vale a pena? (minha opinião sincera)](https://youtu.be/H43fXodv6WY)

- [Hipsters On The Road #01 - PHP Experience: Performance Web, Criptomoedas e mais](https://hipsters.tech/php-experience-performance-web-criptomoedas-e-mais-hipsters-on-the-road-01/)

- [PHP não é coisa de sobrinho! – Hipsters #36](https://hipsters.tech/php-nao-e-coisa-de-sobrinho-hipsters-36/)

- [PHP8, Mudanças e Ecossistema – Hipsters Ponto Tech #241](https://hipsters.tech/php8-mudancas-e-ecossistema-hipsters-ponto-tech-241/)

- [SOLID: Código bom e bonito - Hipsters Ponto Tech #219](https://hipsters.tech/solid-codigo-bom-e-bonito-hipsters-ponto-tech-219/)

- [W3Techs: Usage statistics of PHP for websites](https://w3techs.com/technologies/details/pl-php)
