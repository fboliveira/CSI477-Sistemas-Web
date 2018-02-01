@extends('layout.principal')

@section('conteudo')

<h1>Cidades</h1>

<table>

    <tr>
        <th>Nome</th>
        <th>Estado</th>
        <th>Editar</th>
        <th>Excluir</th>
    </tr>

    @foreach($cidades as $c)
        <tr>
            <td>{{ $c->nome }}</td>
            <td>{{ $c->estado->sigla }}</td>
            <td>Editar</td>
            <td>Excluir</td>
        </tr>
    @endforeach

</table>











@endsection('conteudo')
