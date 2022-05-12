@extends('app')

@section('conteudo')

    <form action="{{ route('estados.store') }}" method="POST">


        <input type="text" name="nome" id="nome">
        <input type="text" name="sigla" id="sigla">


        <input type="submit" value="Cadastrar">


    </form>

@endsection