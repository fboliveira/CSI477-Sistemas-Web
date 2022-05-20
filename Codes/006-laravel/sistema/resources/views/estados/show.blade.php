@extends('app')

@section('conteudo')

<h1>Dados do Estado: {{ $estado->nome }}</h1>

<ul>
    <li>Id: {{ $estado->id }}</li>
    <li>Nome: {{ $estado->nome }}</li>
    <li>Sigla: {{ $estado->sigla }}</li>
    <li>Criação: {{ $estado->created_at }}</li>
    <li>Última alteração: {{ $estado->updated_at }}</li>
</ul>

<a href="{{ route('estados.index') }}" class="btn btn-primary">Voltar</a>

@endsection