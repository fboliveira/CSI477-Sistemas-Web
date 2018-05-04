<?php

namespace Model;

use Model\Database;

class Aluno {

  protected $db = null;

  public function __construct() {
    $this->db = Database::getInstance()->getDB();
  }

  public function all() {
    $sql = "SELECT * FROM alunos ORDER BY nome";
    return $this->db->query($sql);
  }






}
