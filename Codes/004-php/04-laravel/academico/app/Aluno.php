<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Aluno extends Model {

    // Aluno -> Cidade
    public function cidade() {
        return $this->belongsTo('App\Cidade');
    }

}
