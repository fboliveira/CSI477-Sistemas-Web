@extends('principal')

@section('conteudo')

    <a href="{{ route('estados.create') }}">Cadastrar</a>

    <table class="table table-bordered table-hover table-striped">
        <thead class="thead-dark">
            <tr>
                <th>Id</th>
                <th>Nome</th>
                <th>Sigla</th>
            </tr>
        </thead>
        <tbody>

            @foreach($estados as $e)
                <tr>
                    <td>{{ $e->id }}</td>
                    <td>{{ $e->nome }} </td>
                    <td>{{ $e->sigla }}</td>
                </tr>
            @endforeach
        </tbody>
    </table>

@endsection
