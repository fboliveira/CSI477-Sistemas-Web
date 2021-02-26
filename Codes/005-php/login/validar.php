<?php

    //echo "POST";
    //var_dump($_POST);

    $user = $_POST['usuario'];
    $password = $_POST['senha'];

    // Controller
    if ( $user == "admin" && $password == "123456" ) {
        echo "<h1>Olá, $user!</h1>";
        echo "<p>Senha: $password</p>";
    } else {
        echo "<h1>Usuário e/ou senha inválidos!</h1>";
    }

    echo "<a href=\"/login/index.php\">Voltar</a>";
    echo '<a href="index.php">Voltar</a>';