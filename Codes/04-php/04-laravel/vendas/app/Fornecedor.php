<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Fornecedor extends Model
{
    protected $fillable = ['nome', 'nomeFantasia', 'telefone'];

    public function entradas() {
      return $this->hasMany('App\Entrada');
    }

}
