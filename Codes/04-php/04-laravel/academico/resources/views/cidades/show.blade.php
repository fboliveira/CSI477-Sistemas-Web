@extends('principal')

@section('conteudo')

  <h1>Dados da cidade</h1>

  <p>Código: {{ $cidade->id }}</p>
  <p>Nome: {{ $cidade->nome }}</p>
  <p>Estado: {{ $cidade->estado->nome }}</p>

  <a href="/cidades/{{ $cidade->id }}/edit">Editar</a>

@endsection
