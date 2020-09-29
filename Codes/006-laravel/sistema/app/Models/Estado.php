<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Estado extends Model
{
    use HasFactory; // traits

    protected $fillable = ['nome', 'sigla'];
    //protected $guarded = [ 'admin' ];

    // 1-estado -> tem muitas cidades;
    public function cidades() {
        return $this->hasMany(Cidade::class);
    }


}
