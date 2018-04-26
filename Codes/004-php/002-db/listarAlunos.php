<?php

  // Conexão - configuração
  $mysql = 'mysql:host=localhost;dbname=academico';
  $dbusername = 'sistemaweb';
  $dbpassword = '123456';

  $sqlite = 'sqlite:academico.sqlite';

  //$db = new PDO($mysql, $dbusername, $dbpassword);
  $db = new PDO($sqlite);

  var_dump($db);

  // Controlador -> Modelo
  $alunos = $db->query("SELECT * FROM alunos ORDER by nome");

  //var_dump($alunos);

  while ( $linha = $alunos->fetch() ) {
    echo $linha["id"] . " - " . $linha["nome"];
    echo "<br>";
  }











?>
