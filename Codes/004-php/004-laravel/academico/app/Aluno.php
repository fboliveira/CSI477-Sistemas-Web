<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Aluno extends Model
{

  protected $fillable = [ 'nome', 'cidade_id' ];

  public function cidade() {
    return $this->belongsTo('App\Cidade');
  }




}
