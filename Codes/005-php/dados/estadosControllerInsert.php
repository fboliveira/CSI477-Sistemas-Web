<?php

    require 'connection.php';

    $nome = $_POST['nome'];
    $sigla = $_POST['sigla'];

    if(empty($nome) || empty($sigla)) {
        echo '<div><a href="estadosViewInsert.php">Voltar</a></div>';
        die('Informe os dados corretamente');
    }

    try {

        $connection->beginTransaction();

        $stmt = $connection->prepare("INSERT INTO estados (nome, sigla) VALUES (:nome, :sigla)");

        $stmt->bindParam(':nome', $nome);
        $stmt->bindParam(':sigla', $sigla);

        $stmt->execute();

        $connection->commit();

        header('Location: index.php');
        exit();
    } catch(Exception $e) {
        $connection->rollBack();
        die("Erro ao inserir o estado: " . $e->getMessage());
    }