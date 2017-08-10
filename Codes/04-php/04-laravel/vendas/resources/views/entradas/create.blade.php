@extends('principal')

@section('conteudo')

<h1>Entradas</h1>

<a href="/entradas">Voltar</a>

<form method="post" action="/entradas">

  {{ csrf_field() }}

  Produtos:
  <select name="produto_id">
    <option value="">Selecione:</option>

    @foreach($produtos as $p)
      <option value="{{ $p->id }}">{{ $p->nome }}</option>
    @endforeach

  </select>

  <br>Fornecedores:
  <select name="fornecedor_id">
    <option value="">Selecione:</option>

    @foreach($fornecedores as $f)
      <option value="{{ $f->id }}">{{ $f->nome }}</option>
    @endforeach

  </select>

  <br>Quantidade: <input type="text" name="quantidade" value="">

  <br><input type="submit" value="Salvar">

</form>

@endsection
