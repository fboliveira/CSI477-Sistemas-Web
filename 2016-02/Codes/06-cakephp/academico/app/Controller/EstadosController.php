<?php

class EstadosController extends AppController {

  public function index() {

    $this->set('estados', $this->Estado->find('all'));

  }


}
