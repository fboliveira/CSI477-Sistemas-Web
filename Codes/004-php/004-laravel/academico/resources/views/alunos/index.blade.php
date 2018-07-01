@extends('layout.principal')

@section('conteudo')

<h1>Alunos</h1>

<a href="{{ route('alunos.create') }}">Inserir</a>

<table class="table table-striped">

    <tr>
        <th>Nome</th>
        <th>Cidade</th>
        <th>Exibir</th>
        <th>Editar</th>
    </tr>

    @foreach($alunos as $a)
        <tr>
            <td>{{ $a->nome }}</td>
            <td>{{ $a->cidade->nome }}-{{ $a->cidade->estado->sigla }}</td>
            <td><a href="{{ route('alunos.show', $a->id) }}">Exibir</a>
            <td><a href="{{ route('alunos.edit', $a->id) }}">Editar</a></td>
        </tr>
    @endforeach

</table>











@endsection('conteudo')
