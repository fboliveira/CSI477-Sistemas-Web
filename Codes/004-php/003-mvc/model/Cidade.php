<?php

namespace Model;

use Model\Database;

class Cidade {

  protected $db = null;

  private $id;
  private $nome;
  private $estado_id;

  public function __construct() {
    $this->db = Database::getInstance()->getDB();
    $this->id = 0;
  }

  public function __construct2($id, $nome, $estado_id) {
    $this->id = $id;
    $this->nome = $nome;
    $this->estado_id = $estado_id;
  }

  public function __construct3($nome, $estado_id) {
    $this->id = 0;
    $this->nome = $nome;
    $this->estado_id = $estado_id;

  }

  public function setNome($nome) {
    $this->nome = $nome;
  }

  public function setEstadoId($estado_id) {
    $this->estado_id = $estado_id;
  }

  public function all() {
    $sql = "SELECT cidades.*, estados.sigla FROM cidades INNER JOIN estados on cidades.estado_id = estados.id ORDER BY id DESC";
    return $this->db->query($sql);
  }
  
  public function save() {

    if ( $this->id == 0 ) {
      $this->insert();
    } else {
      $this->update();
    }

  }

  public function insert() {
    $sql = "INSERT INTO cidades (nome, estado_id)
            VALUES ('" . $this->nome . "', "
              . $this->estado_id . ")";

  $sql2 = "INSERT INTO cidades (nome, estado_id)
            VALUES (:nome, :estado_id)";

    $this->db->query($sql);

  }

 public function update() {
   die('update');
 }

 public function delete() {

 }


}
