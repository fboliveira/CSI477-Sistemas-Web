@extends('principal')

@section('titulo', 'Cidades')

@section('conteudo')

  <h1>Cidades</h1>

  <a href="{{ route('cidades.create') }}">Inserir</a>

  @foreach($cidades as $c)

    <p><a href="{{ route('cidades.show', $c->id) }}">{{ $c->nome }}-{{ $c->estado->sigla }}</a></p>

  @endforeach

@endsection
