<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Produto;

class CarrinhoController extends Controller
{
    public function add(Request $request, Produto $produto) {
        dd($produto);
    }
}
