@extends('principal')

@section('conteudo')

<h1>Inserir produto</h1>
<a href="/produtos">Voltar</a>

<form method="post" action="/produtos/{{ $produto->id }}">

  {{ csrf_field() }}
  {{ method_field('PATCH') }}

  Nome: <input type="text" name="nome" maxlength="100" value="{{ $produto->nome }}"><br>
  Preço: <input type="text" name="preco" value="{{ $produto->preco }}"> <br>

  <input type="submit" name="botaoSalvar" value="Salvar">

</form>

@endsection
