<?php

  // Configuração - DB -> Laravel: .env

  // Tipo -> MySQL

  // Local -> host
  $dbhost = "127.0.0.1";
  // Usuário
  $dbuser = "sistemaweb";
  // Senha
  $dbpassword = "123456";
  // Banco de dados
  $dbname = "academico";

  // PDO
  $strConnection = "mysql:host=$dbhost;dbname=$dbname;charset=utf8";

  $connection = new PDO($strConnection, $dbuser, $dbpassword);
  //var_dump($connection);

  // Controller -> Model
  $estados = $connection->query("SELECT * FROM estados");
  //var_dump($estados);

  // Regras de negócio ...


  // View -> método view('arquivo', dados);
  // Incluir o arquivo:

  require  'estados_view.php';
