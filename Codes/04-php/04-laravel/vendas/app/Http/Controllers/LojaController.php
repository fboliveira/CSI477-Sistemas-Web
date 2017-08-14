<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Produto;

class LojaController extends Controller
{
    public function index() {

      $produtos = Produto::orderBy('nome')
            ->get();
      return view('loja.index')
            ->with('produtos', $produtos);
    }

  public function view(Produto $produto) {

    return view('loja.view')
        ->with('produto', $produto);

  }



}
