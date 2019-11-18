@extends('principal')

@section('conteudo')

  <table class="table table-striped table-bordered">
    <thead class="table-light">
      <tr>
        <th>Código</th>
        <th>Nome</th>
        <th>Sigla</th>
      </tr>
    </thead>
    <tbody>
  @foreach ($estados as $e)
      <tr>
        <td>{{ $e->id }}</td>
        <td>{{ $e->nome }}</td>
        <td>{{ $e->sigla }}</td>
      </tr>
  @endforeach
    </tbody>
  </table>
@endsection
