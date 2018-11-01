<?php





  // Configuração
  $database = "academico";
  $dbusername = "sistemaweb";
  $dbpassword = "123456";
  $dbhost = "127.0.0.1";
  $mysql = "mysql:host=$dbhost;dbname=$database";

  $connection = new PDO($mysql, $dbusername, $dbpassword);

  //var_dump($connection);

  // Controller -> Model
  $alunos = $connection->query("SELECT * FROM alunos");

  //var_dump($alunos);

  while ( $linha = $alunos->fetch() ) {
    echo $linha["id"] . " - " . $linha["nome"];
  }
