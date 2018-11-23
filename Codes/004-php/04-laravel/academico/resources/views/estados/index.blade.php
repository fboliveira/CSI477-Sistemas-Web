@extends('layout')

@section('conteudo')

  <h1>Estados</h1>

  @foreach($estados as $e)

    <p>{{ $e->nome }}-{{ $e->sigla }}</p>

  @endforeach












@endsection
