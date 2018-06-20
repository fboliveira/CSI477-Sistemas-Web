@extends('layout.principal')

@section('conteudo')

  <h1>Inserir estado</h1>

  <form method="post" action="{{ route('estados.store') }}">

    @csrf

    <p>Nome: <input type="text" name="nome"></p>
    <p>Sigla: <input type="text" name="sigla"></p>

    <input type="submit" name="btnIncluir" value="Incluir">

  </form>

@endsection('conteudo')
