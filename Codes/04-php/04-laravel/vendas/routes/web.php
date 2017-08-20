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

Route::get('/welcome', function () {
    return view('welcome');
});

// Loja
Route::get('/', 'LojaController@index');
Route::get('/loja/view/{produto}', 'LojaController@view');
Route::post('/carrinho/adicionar/{produto}', 'CarrinhoController@add');
Route::get('/carrinho', 'CarrinhoController@view' );
Route::get('carrinho/comprar', 'CarrinhoController@store');

Route::resource('/produtos', 'ProdutosController');
Route::resource('/fornecedores', 'FornecedorController',
  ['parameters' => [ 'fornecedores' => 'fornecedor' ]]);

Route::resource('/entradas', 'EntradaController');

Auth::routes();
Route::get('/home', 'HomeController@index')->name('home');
