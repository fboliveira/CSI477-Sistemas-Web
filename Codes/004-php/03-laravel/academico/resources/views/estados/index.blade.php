@extends('principal')

@section('conteudo')

  @foreach($estados as $e)
    <p>{{ $e->nome }}</p>
  @endforeach

@endsection
