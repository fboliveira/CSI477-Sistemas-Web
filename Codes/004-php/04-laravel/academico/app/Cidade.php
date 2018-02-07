<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Cidade extends Model
{

    protected $fillable = [ 'nome', 'estado_id' ];
    // protected $guarded = [ 'senha' ];

    public $timestamps = false;

    // Cidade -> Estado
    public function estado() {
        return $this->belongsTo('App\Estado');
    }


    // 1-N -> cidade -> alunos
    public function alunos() {
        return $this->hasMany('App\Aluno');
    }







}
