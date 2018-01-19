<?php

namespace Controller;

use Model\Aluno;

class AlunosController {

    public function listar() {

        // Acesso aos dados
        $aluno = new Aluno();

        // Manipular os dados -> modelo
        // - Recuperacao
        $lista = $aluno->getAlunos();
        // - Manipulacao/tratamento
        // ...

        // Invocar/retornar os dados para view
        // return view('alunos.listar') <- laravel
        include './view/alunos/lista.php';

    }









}
