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
            </tr>
        </thead>

        <tbody>

            @foreach($estados as $e)

            <tr>
                <td>{{ $e->id }}</td>
                <td>{{ $e->nome }}</td>
                <td>{{ $e->sigla}}</td>

            </tr>

            @endforeach

        </tbody>

    </table>

@endsection