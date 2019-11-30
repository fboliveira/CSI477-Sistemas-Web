@extends('principal')

@section('conteudo')

  <a class="btn btn-primary" href="{{ route('cidades.create') }}">Incluir</a>

  <table class="table table-striped table-bordered">
    <thead class="table-light">
      <tr>
        <th>Código</th>
        <th>Nome</th>
        <th>Estado</th>
        <th>Ação</th>
      </tr>
    </thead>
    <tbody>
  @foreach ($cidades as $c)
      <tr>
        <td>{{ $c->id }}</td>
        <td>{{ $c->nome }}</td>
        <td>{{ $c->estado->nome }} ({{ $c->estado->sigla }})</td>
        <td><a href="{{ route('cidades.show', $c->id) }}">Exibir</a>
      </tr>
  @endforeach
    </tbody>
  </table>
@endsection
