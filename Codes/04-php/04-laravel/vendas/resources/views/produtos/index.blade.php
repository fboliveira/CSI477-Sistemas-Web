@extends('principal')

@section('conteudo')

<h1>Produtos</h1>

@foreach($produtos as $p)

  <p>{{ $p->id }} - {{ $p->nome }} - R$ {{ $p->preco }}</p>

@endforeach

@endsection
