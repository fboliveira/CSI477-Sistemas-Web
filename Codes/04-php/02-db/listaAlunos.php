<?php

  // Model
  $db = new PDO('mysql:host=localhost;dbname=academico', 'sistemaweb', '123456');

  $retorno = $db->query("SELECT * FROM alunos ORDER BY nome");

?>
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Lista de Alunos</title>
  </head>
  <body>
    <table>
        <tr>
          <th>Código</th>
          <th>Nome</th>
        </tr>

        <?php
        // Controller
        while ($linha = $retorno->fetch(PDO::FETCH_ASSOC)) {
          // View
          echo "<tr>";
          echo "<td>" . $linha["id"] . "</td>";
          echo "<td>" . $linha["nome"] . "</td>";
          echo "</tr>";
        }
        ?>

    </table>
  </body>
</html>
