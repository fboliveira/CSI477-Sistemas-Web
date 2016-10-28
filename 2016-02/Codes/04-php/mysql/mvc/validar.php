<?php

  require_once("acesso.php");

  $usuario = $_POST['usuario'];
  $senha = $_POST['senha'];

  $sql = "SELECT id, nome FROM usuarios WHERE login = '$usuario' AND senha = md5('$senha')";
  $resultado = $conexao->query($sql);

  if ($resultado->num_rows > 0) {
      header('Location: alunos.php');
      die();
  } else {
      echo "Usuário e/ou senha inválidos!";
      echo '<a href="login.php">Voltar</a>';
  }
