@extends('app')

@section('conteudo')

    <h2>Lista de Estados</h2>

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