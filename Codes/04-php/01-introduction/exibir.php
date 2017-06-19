<?php

  //var_dump($_GET);

  if (isset($_POST["nome"])) {
      $nome = "POST -> " . $_POST["nome"];
  } else {
    $nome = "GET -> " . $_GET["nome"];
  }

  echo "<h1>$nome</h1>";
