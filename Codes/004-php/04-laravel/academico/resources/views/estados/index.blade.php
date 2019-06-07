@extends('principal')

@section('titulo', 'Estados')


@section('conteudo')

  <a href="{{ route('estados.create') }}">Inserir</a>

  <table>
    <tr>
      <th>Código</th>
      <th>Nome</th>
      <th>Sigla</th>
    </tr>
  @foreach ($estados as $e)
    <tr>
      <td>{{ $e->id }}</td>
      <td>{{ $e->nome }} </td>
      <td>{{ $e->sigla }}</td>
    </tr>
  @endforeach
  </table>

@endsection
