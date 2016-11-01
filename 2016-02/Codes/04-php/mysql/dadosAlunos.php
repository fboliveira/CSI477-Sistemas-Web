<?php

require_once './ConnectionMySQL/Connection.php';

$conn = new Connection();
$sql = "SELECT id, nome FROM alunos WHERE id = ?";
$prep = $conn->getConnection()->prepare($sql);
$id = 5;
$prep->bind_param("i", $id);
$prep->execute();
$resultado = $prep->get_result();



//$resultado = $conn->execute($sql);

//echo "Linhas retornadas: " . $resultado->num_rows;

include './mvc/lista_alunos.php';
