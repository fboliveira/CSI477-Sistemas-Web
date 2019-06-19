@extends('principal')

@section('titulo', 'Estados')


@section('conteudo')

  <a href="{{ route('estados.create') }}">Inserir</a>

  <table>
    <tr>
      <th>Código</th>
      <th>Nome</th>
      <th>Sigla</th>
      <th>Visualizar</th>
    </tr>
  @foreach ($estados as $e)
    <tr>
      <td>{{ $e->id }}</td>
      <td><a href="{{ route('estados.show', $e->id) }}">{{ $e->nome }}</a></td>
      <td>{{ $e->sigla }}</td>
      <td><a href="{{ route('estados.show', $e->id) }}">Exibir</a></td>
    </tr>
  @endforeach
  </table>

@endsection
