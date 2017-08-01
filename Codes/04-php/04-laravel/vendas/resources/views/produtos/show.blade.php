@extends('principal')

@section('conteudo')

<h1>Excluir produto</h1>
<a href="/produtos">Voltar</a>

<p>Id: {{ $produto->id }}</p>
<p>Nome: {{ $produto->nome }}</p>
<p>Preço R$: {{ $produto->preco }}</p>

<a href="/produtos/{{ $produto->id }}/edit"><i class="fa fa-pencil fa-fw"></i>Editar</a>

<form method="post" action="/produtos/{{ $produto->id }}">

  {{ csrf_field() }}
  {{ method_field('DELETE') }}

  <input type="submit" value="Confirmar exclusão">

</form>




@endsection
