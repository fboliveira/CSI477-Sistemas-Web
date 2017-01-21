<?php

class CidadesController extends AppController {

  public $helpers = array('Html');

  public function index() {

    $this->set('cidades', $this->Cidade->find('all'));

  }

  public function view($id = null) {

    if (!$id) {
      throw new NotFoundException("Cidade Inválida!");
    }

    $cidade = $this->Cidade->findById($id);
    $this->set('cidade', $cidade);

  }

}
