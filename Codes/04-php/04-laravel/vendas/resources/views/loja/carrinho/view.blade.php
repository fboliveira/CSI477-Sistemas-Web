@extends('principal')

@section('conteudo')
<h1>Carrinho de compras</h1>

<a class="btn btn-primary" href="/carrinho/comprar">Comprar</a><br><br>

@if(Session::has('carrinho'))
  @php
    $carrinho = Session::get('carrinho');
    //var_dump($carrinho);
  @endphp

  @foreach($carrinho as $c)
    Código do Produto: {{ $c->produto_id }}<br>
    Nome do Produto: {{ $c->produto->nome }}<br>
    Quantidade: {{ $c->quantidade }}<br><br>
  @endforeach

@else
  <p class="alert alert-warning">Não existe nenhum produto no carrinho.</p>
@endif

@endsection
