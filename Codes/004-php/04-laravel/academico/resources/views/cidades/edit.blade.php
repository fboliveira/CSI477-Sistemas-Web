@extends('principal')

@section('conteudo')

  <h1>Editar Cidade</h1>

  <form method="post" action="{{ route('cidades.update', $cidade->id) }}">

    @csrf
    @method('PATCH')

      <p>Nome: <input type="text" name="nome"
          value="{{ $cidade->nome}}"></p>
      <p>Estado:</p>

      <select name="estado_id">

        @foreach($estado as $e)
          <option value="{{ $e->id }}"

            @if ( $cidade->estado_id == $e->id )
                selected
            @endif

            >{{ $e->nome }}</option>
        @endforeach
      </select>


      <input type="submit" name="btnSalvar" value="Editar">

  </form>








@endsection
