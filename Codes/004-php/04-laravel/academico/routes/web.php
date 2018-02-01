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

Route::get('/info', function () {
    return view('welcome');
});

Route::get('/', function(){
    return view('layout.principal');
});

Route::get('/listar', 'AlunosController@listar');

Route::resource('/estados', 'EstadosController');
Route::resource('/cidades', 'CidadesController');
