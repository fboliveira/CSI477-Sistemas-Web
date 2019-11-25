@extends('principal')

@section('conteudo')

  <table class="table table-striped table-bordered">
    <thead class="table-light">
      <tr>
        <th>Código</th>
        <th>Nome</th>
        <th>E-mail</th>
        <th>Cidade</th>
      </tr>
    </thead>
    <tbody>
  @foreach ($alunos as $a)
      <tr>
        <td>{{ $a->id }}</td>
        <td>{{ $a->nome }}</td>
        <td>{{ $a->email }}</td>
        <td>{{ $a->cidade_id }}</td>
      </tr>
  @endforeach
    </tbody>
  </table>
@endsection
