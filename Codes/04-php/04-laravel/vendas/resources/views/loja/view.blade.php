@extends('principal')

@section('conteudo')
  <h1>Detalhes do produto</h1>

  Nome: {{ $produto->nome }}<br>
  Preço: {{ $produto->preco }}<br>

  <form method="post" action="/carrinho/adicionar/{{$produto->id}}">

    {{ csrf_field() }}

    <input type="text" name="quantidade" value="1">
    <input type="submit" value="Inserir no carrinho">
  </form>

@endsection
