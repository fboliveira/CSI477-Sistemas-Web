@extends('layout')

@section('conteudo')

  <h1>Estado: {{ $estado->nome }}-{{ $estado->sigla }} </h1>

  <p>Código: {{ $estado->id }}</p>
  <p>Nome: {{ $estado->nome }}</p>
  <p>Sigla: {{ $estado->sigla }}</p>

  <a href="{{ route('estados.index') }}">Voltar</a>
  <a href="{{ route('estados.edit', $estado->id) }}">Editar</a>


  <form method="post" action="{{ route('estados.destroy', $estado->id) }}" onsubmit="return confirm('Confirma exclusão do Estado: {{ $estado->nome }} ?');" >

    @csrf
    @method('DELETE')
    <input type="submit" value="Excluir">





  </form>












@endsection
