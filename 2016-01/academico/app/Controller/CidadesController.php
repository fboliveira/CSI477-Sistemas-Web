<?php

class CidadesController extends AppController {

  public $helpers = array('Html', 'Form');
  public $components = array('Flash');

  public function index() {
    $this->set('cidades', $this->Cidade->find('all'));
  }

  public function view($codigo) {

    $cidade = $this->Cidade->findById($codigo);
    $this->set('cidade', $cidade);

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

  public function edit($codigo) {

    if (empty($this->request->data)) {
      // Data Vazia => campos para edição

      // Carregar os estados para exibição
      $estados = $this->Cidade->Estado->find('list',
              array('fields' => array('id', 'nome')));

      // Setar na view a variável com os dados dos estados
      $this->set('estados', $estados);

      // Recuperar os dados atuais
      $this->request->data = $this->Cidade->findById($codigo);

    } else {
      // Persistir os dados
      if ($this->Cidade->save($this->request->data)) {
        //$codigo = $this->request->data['Cidade']['id'];
        $this->Flash->set('Cidade atualizada com Sucesso !');
        $this->redirect(array('action' => 'index'));
      }


    }

  }

  public function del($codigo) {
    $this->Cidade->delete($codigo);
    $this->Flash->set('Cidade excluída com Sucesso !');
    $this->redirect(array('action' => 'index'));
  }

}





 ?>
