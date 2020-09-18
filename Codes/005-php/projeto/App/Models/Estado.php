<?php

namespace App\Models;

class Estado implements ModelInterface {

    private $id, $nome, $sigla;

    public function __construct($id, $nome, $sigla) {

        $this->id = $id;
        $this->nome = $nome;
        $this->sigla = $sigla;

    }

    public function __destruct() {

    }

    public function getAll() {

    }

    public function get($id) {
        
    }

}