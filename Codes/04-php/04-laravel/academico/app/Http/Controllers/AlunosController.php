<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Aluno;

class AlunosController extends Controller
{
    public function index() {

      $alunos = Aluno::orderBy('nome')->get();
      //dd($alunos);
      //return $alunos;
      return view('alunos.index')->with('alunos', $alunos);

    }
}
