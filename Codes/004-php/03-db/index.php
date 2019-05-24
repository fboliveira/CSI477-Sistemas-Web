<?php

  // Configuração - DB
  $database = "academico";

  $dbuser = "sistemaweb";
  $dbpassword = "123456";
  $dbhost = "127.0.0.1";

  // PGSQL -> $pdo = new PDO('pgsql:host=192.168.137.1;port=5432;dbname=anydb', 'anyuser', 'pw');
  $strConn = "mysql:host=$dbhost;dbname=$database";

  $connection = new PDO($strConn, $dbuser, $dbpassword);
  //var_dump($connection);

  // Controller -> Model
  $estados = $connection->query("SELECT * FROM estados");

  //var_dump($estados);

  // View
  // Controller -> invocar view - parâmetros
  require 'view_estados.php'; // $estados
