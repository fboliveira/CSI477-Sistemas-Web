<?php

class CidadesController extends AppController {

  public $helpers = array('Html', 'Form');
  public $components = array('Flash');

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

  public function add() {

    if (empty($this->request->data)) {
      // data esta vazio -> carregar campos para inclusao.

      // Carregar os estados - combo
      $estados = $this->Cidade->Estado->find('list',
        array('fields' => array('id', 'nome'))
      );

      $this->set('estados', $estados);

    } else {
      // Persistir os dados
      if ($this->Cidade->save($this->request->data)) {
        $this->Flash->set("Cidade inserida com sucesso !");
        $this->redirect(array('action' => 'index'));
      }
    }


  }

  public function edit($id = null) {

    if (!$id) {
      throw new NotFoundException("Cidade Inválida!");
    }

    if (empty($this->request->data)) {
      // data esta vazio -> carregar campos para edicao.

      // Carregar os estados - combo
      $estados = $this->Cidade->Estado->find('list',
        array('fields' => array('id', 'nome'))
      );

      $this->set('estados', $estados);
      // Carregar os dados atuais
      $this->request->data = $this->Cidade->findById($id);


    } else {
      // Persistir os dados
      if ($this->Cidade->save($this->request->data)) {
        $this->Flash->set("Cidade atualizada com sucesso !");

        $this->redirect(array('action' => 'index'));
      }
    }

  }

  public function delete($id = null) {

    if (!$id) {
      throw new NotFoundException("Cidade Inválida!");
    }

    $this->Cidade->delete($id);
    $this->Flash->set("Cidade excluída com sucesso !");
    $this->redirect(array('action' => 'index'));

  }










}
