<?php

class CidadesController extends AppController {

  public $helpers = array('Html', 'Form');
  public $components = array('Flash');

  public function index() {
    $this->set('cidades', $this->Cidade->find('all'));
  }

  public function view($codigo) {

    // Criar

  }

  public function add() {

    if (empty($this->request->data)) {
      // Data Vazia => campos para inserção

      // Carregar os estados para exibição
      $estados = $this->Cidade->Estado->find('list',
              array('fields' => array('id', 'nome')));

      // Setar na view a variável com os dados dos estados
      $this->set('estados', $estados);

    } else {
      // Persistir os dados
      if ($this->Cidade->save($this->request->data)) {
        $this->Flash->set('Cidade inserida com Sucesso !');
        $this->redirect(array('action' => 'index'));
      }


    }

  }

}





 ?>
