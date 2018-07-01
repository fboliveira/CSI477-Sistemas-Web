<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Estado extends Model
{
    //
    protected $fillable = [ 'nome', 'sigla' ];
    // protected $guarded = [ 'senha' ];

    // 1-Estado -> *-Cidades
    public function cidades() {
      return $this->hasMany('App\Cidade');
    }












}
