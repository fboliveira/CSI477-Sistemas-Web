<?php

  $conexao = new mysqli("localhost", "sistemaweb", "123456", "academico");

  if ($conexao->connect_errno) {
    echo "Falha de conexão!";
  } else {
    echo "Conexão realizada com sucesso!";
    echo $conexao->host_info;
  }

  $sql = "SELECT id, nome FROM alunos";
  $resultado = $conexao->query($sql);

  echo "Linhas retornadas: " . $resultado->num_rows;
  echo "<br>\n";

  while($linha = $resultado->fetch_assoc()) {
    echo $linha["id"] . " - " . $linha["nome"] . "<br>\n";
  }










 ?>
