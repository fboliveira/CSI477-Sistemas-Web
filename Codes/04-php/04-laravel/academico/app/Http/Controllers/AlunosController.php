<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Aluno;

class AlunosController extends Controller
{
  public function index() {

    // https://tutorials.kode-blog.com/laravel-5-faker-tutorial
    $faker = \Faker\Factory::create();
    $limit = 10;

    $data = [];

    for ($i = 0; $i < $limit; $i++) {
      array_push($data,
      $faker->word . ', Email Address: ' . $faker->unique()->email . ', Contact No' . $faker->phoneNumber);
    }

    dd($data);

    //$alunos = Aluno::orderBy('nome')->get();
    //dd($alunos);
    //return $alunos;
    return view('alunos.index')->with('alunos', $alunos);

  }
}
