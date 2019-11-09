<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;


class PaginasController extends Controller {


    public function welcome() {
      return view('welcome');
    }

    public function index(){
      return view('principal');
    }

    public function listar() {

      $lista = ['Ana', 'Brígida', 'Hugo', 'João', 'Pedro', 'Ricardo'];

      return view('lista')->with('lista', $lista);


    }


}
