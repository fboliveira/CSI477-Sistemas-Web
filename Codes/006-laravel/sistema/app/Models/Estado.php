<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Estado extends Model
{
    use HasFactory;

    protected $fillable = ['nome', 'sigla'];
    // protected $guarded = ['admin'];

    public function cidades() {
        return $this->hasMany(Cidade::class);
    }

}
