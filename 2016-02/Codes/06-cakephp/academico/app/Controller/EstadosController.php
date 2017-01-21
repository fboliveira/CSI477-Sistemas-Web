<?php

class EstadosController extends AppController {

  public $helpers = array('Html');

  public function index() {

    $this->set('estados', $this->Estado->find('all'));

  }

  public function view($id = null) {

    if (!$id) {
      throw new NotFoundException("Estado Inválido!");
    }

    $estado = $this->Estado->findById($id);
    $this->set('estado', $estado);

  }

}
