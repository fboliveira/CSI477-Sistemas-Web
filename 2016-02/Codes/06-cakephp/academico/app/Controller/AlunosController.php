<?php

class AlunosController extends AppController {

  public $helpers = array('Html');

  public function index() {

    $this->set('alunos', $this->Aluno->find('all'));

  }

  public function view($id = null) {

    if (!$id) {
      throw new NotFoundException("Código de Aluno(a) Inválido(a)!");
    }

    $aluno = $this->Aluno->findById($id);
    $this->set('aluno', $aluno);

  }

}
