@extends('layout.principal')

@section('conteudo')

  <h1>Atualizar estado: {{ $estado->id }}</h1>

  <form method="post" action="{{ route('estados.update', [ 'estado' => $estado->id]) }}">

    @csrf
    @method('PATCH')

    <p>Nome: <input type="text" name="nome" value="{{ $estado->nome }}"></p>
    <p>Sigla: <input type="text" name="sigla" value="{{ $estado->sigla }}"></p>

    <input type="submit" name="btnAtualizar" value="Atualizar">

  </form>

@endsection('conteudo')
