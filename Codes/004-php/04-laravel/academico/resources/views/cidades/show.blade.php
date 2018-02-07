@extends('layout.principal')

@section('conteudo')

<h1>Dados da cidade</h1>

<a href="{{ url('/cidades') }}">Voltar</a>


<p>Código: {{ $cidade->id }}</p>
<p>Nome: {{ $cidade->nome }}</p>

<p>Estado: {{ $cidade->estado->nome }}</p>

@endsection
