<?php

namespace Model;

class Aluno {

  protected $db = null;

  public function __construct($db) {
      $this->db = $db;
  }

  public function getAlunos() {

    return $this->db->query("SELECT * FROM alunos ORDER BY nome");

  }






}
