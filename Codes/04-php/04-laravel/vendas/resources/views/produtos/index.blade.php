@extends('principal')

@section('conteudo')

<h1>Produtos</h1>
<a class="btn btn-primary" href="/produtos/create">Inserir</a>

<table class="table table-bordered table-striped">
  <thead>
    <tr>
      <th>Código</th>
      <th>Nome</th>
      <th>Preço R$</th>
      <th>Editar</th>
      <th>Excluir</th>
    </tr>
  </thead>
  <tbody>
@foreach($produtos as $p)
<tr>
  <td>{{ $p->id }}</td>
  <td>{{ $p->nome }}</td>
  <td>{{ $p->preco }}</td>
  <td><a href="/produtos/{{ $p->id }}/edit">Editar</a></td>
  <td><a href="#">Excluir</a></td>
</tr>
@endforeach
</tbody>
</table>

@endsection
