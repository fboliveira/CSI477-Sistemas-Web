@extends('layout.principal')

@section('conteudo')

<h1>Cidades</h1>

<a href="{{ url('/cidades/create') }}">Inserir</a>

<table>

    <tr>
        <th>Nome</th>
        <th>Estado</th>
        <th>Exibir</th>
        <th>Editar</th>
        <th>Excluir</th>
    </tr>

    @foreach($cidades as $c)
        <tr>
            <td>{{ $c->nome }}</td>
            <td>{{ $c->estado->sigla }}</td>
            <td><a href="/cidades/{{ $c->id }}">Exibir</a> 
            <td>Editar</td>
            <td>Excluir</td>
        </tr>
    @endforeach

</table>











@endsection('conteudo')
