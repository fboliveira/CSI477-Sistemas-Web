<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Produto extends Model
{
    protected $fillable = ['nome', 'preco'];

    public function entradas() {
      return $this->hasMany('App\Entrada');
    }

}
