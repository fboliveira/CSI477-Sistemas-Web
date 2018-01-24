<?php

namespace App\Http\Controllers;

use App\Aluno;

class AlunosController extends Controller {

    public function listar() {

        // Acesso ao modelo e recuperacao dos dados
        $alunos = Aluno::all();

        // Invocar a view passando os dados
        dd($alunos);

    }












}
