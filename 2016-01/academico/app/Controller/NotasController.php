<?php

class NotasController extends AppController {

  public $helpers = array('Html');

  public function index() {
    $this->set('notas', $this->Nota->find('all'));
  }

  public function view($codigo) {

    $notas = $this->Nota->find('all', array('conditions' => array('Aluno.id' => $codigo)));
    $this->set('notas', $notas);

  }

}

 ?>
