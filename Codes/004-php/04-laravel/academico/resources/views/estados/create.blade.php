@extends('principal')

@section('titulo', 'Inserir Estado')



@section('conteudo')

  <form method="post" action="{{ route('estados.store') }}">

    @csrf

    <p>Nome: <input type="text" name="nome"></p>
    <p>Sigla: <input type="text" name="sigla"></p>

    <input type="submit" name="btnSalvar" value="Incluir">

  </form>


@endsection
