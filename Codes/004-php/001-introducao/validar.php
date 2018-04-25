<?php

    //var_dump($_POST);
    $nome = $_POST["usuario"];
    $senha = $_POST["senha"];

    echo "Seja bem-vindo(a) " . $nome. "<br>";
    echo 'A sua senha é $senha';
