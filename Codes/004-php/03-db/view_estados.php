<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Lista de estados</title>
  </head>
  <body>
    <?php

      echo "<ol>";
      while($e = $estados->fetch()) {
        //var_dump($e);
        echo "<li>" . $e["nome"] . "</li>\n";
      }
      echo "</ol>";

     ?>
  </body>
</html>
