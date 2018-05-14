<?php

namespace Controller;

use Model\Cidade;
use Model\Estado;

class CidadesController {

  public function listar() {

  }

  // Exibir o formulario para insercao da cidade
  public function create() {

    // Carregar os dados dos Estados
    $estados = new Estado;
    $lista = $estados->all();

    // Exibir a view
    include './view/cidades/create.php';
  }

  public function store($request) {
    $nome = $request['nome'];
    $estado_id = $request['estado_id'];

    $cidade = new Cidade();
    $cidade->setNome($nome);
    $cidade->setEstadoId($estado_id);
    $cidade->save();

    $cidade->listar();


  }







}
