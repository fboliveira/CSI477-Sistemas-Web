@extends('principal')

@section('conteudo')

<h1>Fornecedores</h1>
<a class="btn btn-primary" href="/fornecedores/create">Inserir</a>

<table class="table table-bordered table-striped">
  <thead>
    <tr>
      <th>Código</th>
      <th>Nome</th>
      <th>Nome Fantasia</th>
      <th>Telefone</th>
      <th>Editar</th>
      <th>Excluir</th>
    </tr>
  </thead>
  <tbody>
@foreach($fornecedores as $f)
<tr>
  <td>{{ $f->id }}</td>
  <td>{{ $f->nome }}</td>
  <td>{{ $f->nomeFantasia }}</td>
  <td>{{ $f->telefone }}</td>
  <td><a href="/fornecedores/{{ $f->id }}/edit"><i class="fa fa-pencil fa-fw"></i>Editar</a></td>
  <td><a href="/fornecedores/{{ $f->id }}"><i class="fa fa-trash-o fa-fw"></i> Excluir</a></td>
</tr>
@endforeach
</tbody>
</table>

@endsection
