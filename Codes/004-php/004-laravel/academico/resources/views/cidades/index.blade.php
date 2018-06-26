@extends('layout.principal')

@section('conteudo')

<h1>Cidades</h1>

<a href="{{ route('cidades.create') }}">Inserir</a>

<table class="table table-striped">

    <tr>
        <th>Nome</th>
        <th>Estado</th>
        <th>Exibir</th>
        <th>Editar</th>
    </tr>

    @foreach($cidades as $c)
        <tr>
            <td>{{ $c->nome }}</td>
            <td>{{ $c->estado->nome }}-{{ $c->estado->sigla }}</td>
            <td><a href="{{ route('cidades.show', $c->id) }}">Exibir</a>
            <td><a href="{{ route('cidades.edit', $c->id) }}">Editar</a></td>
        </tr>
    @endforeach

</table>











@endsection('conteudo')
