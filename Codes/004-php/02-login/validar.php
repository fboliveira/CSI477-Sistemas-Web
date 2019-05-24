<?php

  $user = $_POST['usuario'];
  $password = $_POST['senha'];

  // echo "POST";
  // var_dump($_POST);
  //
  // echo "GET";
  // var_dump($_GET);

  // conexao ou recuperacao da conexao com DB
  // Submeter os dados ao model

  // Controller
  // Validar
  if ( $user == "admin" && $password == "123456" ) {
    echo "<h1>Seja bem-vinda(o) $user !</h1>";
    echo "<p>Senha: $password</p>";
  } else {
    echo "<h1>Usuário e/ou senha inválidos!</h1>";
  }

  echo "<a href=\"index.php\">Voltar</a>";
