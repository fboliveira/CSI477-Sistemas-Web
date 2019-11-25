@extends('principal')

@section('conteudo')

  <table class="table table-striped table-bordered">
    <thead class="table-light">
      <tr>
        <th>Código</th>
        <th>Nome</th>
        <th>Carga</th>
      </tr>
    </thead>
    <tbody>
  @foreach ($disciplinas as $d)
      <tr>
        <td>{{ $d->id }}</td>
        <td>{{ $d->nome }}</td>
        <td>{{ $d->carga }}</td>
      </tr>
  @endforeach
    </tbody>
  </table>
@endsection
