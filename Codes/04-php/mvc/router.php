<?php

// Includes - framework
include './model/Database.php';
include './model/Aluno.php';
include './controller/AlunosController.php';

// Tratamento das rotas
use Controller\AlunosController;

$op = $_GET['op'];

if ( $op == 1 ) {
  $aluno = new AlunosController;
  $aluno->listar();
}
