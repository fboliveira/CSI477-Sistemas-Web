@extends('app')

@section('conteudo')

    <h2>Lista de Estados</h2>

    <a class="btn btn-primary" href="{{ route('estados.create') }}">Incluir</a>

    <table class="table table-stripped table-hover">

        <thead>
            <tr>
                <th>Código</th>
                <th>Nome</th>
                <th>Sigla</th>
                <th>Ação</th>
            </tr>
        </thead>

        <tbody>

            @foreach($estados as $e)

            <tr>
                <td>{{ $e->id }}</td>
                <td><a href="{{ route('estados.show', $e->id) }}">{{ $e->nome }}</a></td>
                <td>{{ $e->sigla}}</td>
                <td>
                    <a href="{{ route('estados.show', $e->id) }}"><i class="bi bi-binoculars"> </i>Exibir</a>
                    <a href="{{ route('estados.edit', $e->id) }}"><i class="bi bi-pencil-square"> </i>Editar</a>            
            </td>

            </tr>

            @endforeach

        </tbody>

    </table>


    {{ $estados->links() }}


@endsection