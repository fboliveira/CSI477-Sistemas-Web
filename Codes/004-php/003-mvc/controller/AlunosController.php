<?php

namespace Controller;

use Model\Aluno;

class AlunosController {

  public function listar() {

    // Acesso ao Modelo
    $aluno = new Aluno();

    // Manipular dados
    $lista = $aluno->all();


    // Invocar a View
    include './view/alunos/lista.php';



  }

}
