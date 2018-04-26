<?php

    //var_dump($_POST);

    if (isset($_POST["usuario"])) {
        $nome = $_POST["usuario"] . " (post)";
        $senha = $_POST["senha"];
    } else {
      $nome = $_GET["usuario"]  . " (get)";
      $senha = $_GET["senha"];
    }

    echo "Seja bem-vindo(a) " . $nome. "<br>";
    echo "A sua senha é $senha:";
