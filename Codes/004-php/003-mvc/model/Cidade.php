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

  public function all() {
    $sql = "SELECT * FROM cidades ORDER BY nome";
    return $this->db->query($sql);
  }

  public function insert() {

  }

 public function update() {

 }

 public function delete() {

 }


}
