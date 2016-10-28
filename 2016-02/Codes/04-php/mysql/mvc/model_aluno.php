<?php

  require_once("acesso.php");

  $sql = "SELECT id, nome FROM alunos";
  $resultado = $conexao->query($sql);
