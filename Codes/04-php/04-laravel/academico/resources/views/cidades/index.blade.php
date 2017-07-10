@extends('principal')

@section('conteudo')

  <h1>Cidades</h1>

  <a href="/cidades/create">Inserir</a> <br>

  @foreach($cidades as $c)
    {{ $c->nome }}-{{ $c->estado->sigla }} <br>
  @endforeach

@endsection
