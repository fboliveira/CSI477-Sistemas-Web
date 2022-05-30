<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\EstadoController;
use App\Http\Controllers\CidadeController;

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

Route::get('/', function() {
    return view('home');
})->name('home');

Route::get('/lista', function() {
    return view('lista');
})->name('lista');

Route::get('/welcome', function () {
    return view('welcome');
})->name('welcome');

Route::resource('/estados', EstadoController::class);
Route::resource('/cidades', CidadeController::class);
