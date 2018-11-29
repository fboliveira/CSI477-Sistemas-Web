@extends('layout')

@section('conteudo')

  <h1>Inserir Estados</h1>

  <form method="post" action="/estados">

    @csrf

      <p>Nome: <input type="text" name="nome"></p>
      <p>Sigla: <input type="text" name="sigla"></p>

      <input type="submit" name="btnSalvar" value="Incluir">

  </form>








@endsection
