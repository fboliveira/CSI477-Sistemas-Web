<?php

class EstadosController extends AppController {

  public $helpers = array('Html');

  public function index() {
    $this->set('estados', $this->Estado->find('all'));
  }

  public function view($codigo) {

    $estado = $this->Estado->findById($codigo);
    $this->set('estado', $estado);

  }


}





 ?>
