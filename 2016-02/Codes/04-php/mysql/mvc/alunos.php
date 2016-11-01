<?php

  session_start();
  if (isset($_SESSION['username'])) {
    require("model_aluno.php");
    require("lista_alunos.php");
} else {

  header('Location: login.php');
  die();

}
