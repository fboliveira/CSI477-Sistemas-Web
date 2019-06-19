@extends('principal')

@section('titulo', 'Exibir Estado')

@section('conteudo')

  <h1>Estado: {{ $estado->nome }}</h1>

  <p>Código: {{ $estado->id }}</p>
  <p>Nome: {{ $estado->nome }}</p>
  <p>Sigla: {{ $estado->sigla }}</p>


  <!-- Voltar para a lista de estados //-->
  <a href="{{ route('estados.index') }}">Voltar</a>

  <!-- Editar o estado corrente //-->
  <a href="{{ route('estados.edit', $estado->id) }}">Editar</a>

  <!-- Excluir o estado corrente //-->
  <form method="post" action="{{ route('estados.destroy', $estado->id) }}" onsubmit="return confirm('Confirma exclusão do estado?');" >

    @csrf
    @method('DELETE')

    <input type="submit" value="Excluir">

  </form>










@endsection
