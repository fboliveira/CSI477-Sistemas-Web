<?php

  // Conexão - configuração
  $mysql = 'mysql:host=localhost;dbname=academico';
  $dbusername = 'sistemaweb';
  $dbpassword = '123456';

  $sqlite = 'sqlite:academico.sqlite';

  //$db = new PDO($mysql, $dbusername, $dbpassword);
  $db = new PDO($sqlite);

  //var_dump($db);

  // Controlador -> Modelo
  $alunos = $db->query("SELECT * FROM alunos ORDER by nome");

  //var_dump($alunos);

  // while ( $linha = $alunos->fetch() ) {
  //   echo $linha["id"] . " - " . $linha["nome"];
  //   echo "<br>";
  // }
  // View ->
?>
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Lista de alunos(as)</title>
  </head>
  <body>

    <table border="1">

      <tr>
        <th>Matrícula</th>
        <th>Nome</th>
      </tr>

      <?php foreach( $alunos as $linha ): ?>
      <tr>
        <td><?= $linha['id'] ?></td>
        <td><?= $linha['nome'] ?></td>
      </tr>
    <?php endforeach ?>

    </table>








  </body>
</html>
