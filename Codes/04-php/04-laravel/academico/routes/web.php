<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

use App\Aluno;

Route::get('/welcome', function () {
    return view('welcome');
});

Route::get('/', function () {
    return view('principal');
});

// Route::get('/alunos', function() {
//     //$alunos = DB::table('alunos')->get();
//     $alunos = Aluno::all();
//     return $alunos;
// });

Route::get('/alunos', 'AlunosController@index');

Route::resource('cidades', 'CidadeController');
