<?php

class AlunosController extends AppController {

  public $helpers = array('Html');

  public function index() {
    $this->set('alunos', $this->Aluno->find('all', array('recursive' => 2)));
  }

  public function view($codigo) {

    $aluno = $this->Aluno->find('first', array('conditions' => array('Aluno.id' => $codigo),
                                               'recursive' => 2));
    $this->set('aluno', $aluno);

  }

}

 ?>
