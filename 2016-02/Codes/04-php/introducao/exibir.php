<?php

    if (isset($_POST["nome"])) {
      $nome = "POST: " . $_POST["nome"];
    } else {
      $nome = "GET: " . $_GET["nome"];
    }


    echo "O nome é: " . $nome;
    echo "<br>";
    echo "<br>";

    var_dump($_GET);
    echo "<br>";
    echo "<br>";
    var_dump($_POST);


 ?>
