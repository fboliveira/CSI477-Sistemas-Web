<?php

namespace Controller;

use Model\Aluno;
use Model\Database;

class AlunosController {

  public function listar() {

    // Acesso ao Modelo
    $aluno = new Aluno( Database::getInstance()->getDB() );

    // Manipular dados
    $lista = $aluno->getAlunos();

    // Invocar a view
    include './view/alunos/lista.php';  

  }

}
