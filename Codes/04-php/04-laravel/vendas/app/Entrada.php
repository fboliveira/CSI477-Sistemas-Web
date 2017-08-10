<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Entrada extends Model
{
    protected $fillable = ['produto_id',
              'fornecedor_id',
              'quantidade'];

    public function produto() {
      return $this->belongsTo('App\Produto');
    }

    public function fornecedor() {
      return $this->belongsTo('App\Fornecedor');
    }

}
