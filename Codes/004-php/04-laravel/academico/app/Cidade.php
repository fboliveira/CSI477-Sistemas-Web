<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Cidade extends Model
{
    // fillable
    protected $fillable = [ 'nome', 'estado_id' ];

    public function estado() {
      return $this->belongsTo('App\Estado');
    }

}
