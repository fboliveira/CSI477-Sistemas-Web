@extends('principal')

@section('conteudo')

  <h1>Cidades</h1>

  <a href="/cidades/create">Inserir</a> <br>

  @foreach($cidades as $c)
    <a href="/cidades/{{ $c->id }}">
      {{ $c->nome }}-{{ $c->estado->sigla }}</a><br>
  @endforeach

@endsection
