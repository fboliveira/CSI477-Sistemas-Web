<?php

// Includes - framework
include './model/Database.php';
include './model/Aluno.php';
include './controller/AlunosController.php';

// Tratamento das rotas
use Controller\AlunosController;

$op = $_GET['op'];

// Definição das rotas
