@extends('layout.principal')

@section('conteudo')

    <br>
    <!-- URL a partir do nome da rota //-->
    <a href="{{ route('estados.create') }}">Inserir estado</a>
    <table class="table table-striped">

      <tr>
        <th>Código</th>
        <th>Estado</th>
        <th>Sigla</th>
      </tr>

    @foreach( $estados as $e )

      <tr>
        <td>{{ $e->id }}</td>
        <td>{{ $e->nome }}</td>
        <td>{{ $e->sigla }}</td>
    </tr>

    @endforeach

  </table>


@endsection('conteudo')
