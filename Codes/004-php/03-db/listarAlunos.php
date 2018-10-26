<?php





  // Configuração
  $database = "mysql";
  $dbusername = "sistemaweb";
  $dbpassword = "123456";
  $dbhost = "localhost";
  $mysql = "mysql:host=$dbhost;dbname=$database";

  $connection = new PDO($mysql, $dbusername, $dbpassword);

  var_dump($connection);
