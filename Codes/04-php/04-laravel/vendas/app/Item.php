<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Item extends Model
{
    public function produto() {
        return $this->belongsTo('App\Produto');
    }
}
