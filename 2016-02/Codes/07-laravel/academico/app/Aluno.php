<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Aluno extends Model
{
    //
    //protected $table = 'cidades';
    public function isMatriculado() {
        return true;
    }

}
