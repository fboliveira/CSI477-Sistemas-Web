@extends('layout')

@section('conteudo')

  <h1>Estado: {{ $estado->nome }}-{{ $estado->sigla }} </h1>

  <p>Código: {{ $estado->id }}</p>
  <p>Nome: {{ $estado->nome }}</p>
  <p>Sigla: {{ $estado->sigla }}</p>

  <a href="{{ route('estados.index') }}">Voltar</a>
  <a href="{{ route('estados.edit', $estado->id) }}">Editar</a>











@endsection
