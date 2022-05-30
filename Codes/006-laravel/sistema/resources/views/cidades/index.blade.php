@extends('app')

@section('conteudo')

    <h2>Lista de Cidades</h2>

    <a class="btn btn-primary" href="{{ route('cidades.create') }}">Incluir</a>

    <table class="table table-stripped table-hover">

        <thead>
            <tr>
                <th>Código</th>
                <th>Nome</th>
                <th>Estado</th>
                <th>Ação</th>
            </tr>
        </thead>

        <tbody>

            @foreach($cidades as $c)

            <tr>
                <td>{{ $c->id }}</td>
                <td><a href="{{ route('cidades.show', $c->id) }}">{{ $c->nome }}</a></td>
                <td>{{ $c->estado->nome }}-{{ $c->estado->sigla }}</td>
                <td>
                    <a href="{{ route('cidades.show', $c->id) }}"><i class="bi bi-binoculars"> </i>Exibir</a>
                    <a href="{{ route('cidades.edit', $c->id) }}"><i class="bi bi-pencil-square"> </i>Editar</a>            
            </td>

            </tr>

            @endforeach

        </tbody>

    </table>


    {{ $cidades->links() }}


@endsection