@extends('layout.principal')

@section('conteudo')

    <h1>Editar aluno</h1>

    <a href="{{ route('alunos.index') }}">Voltar</a>

    <form method="post" action="{{ route('alunos.update', $aluno->id) }}">

        @csrf
        @method('PATCH')

        Nome: <input type="text" name="nome" value="{{ $aluno->nome }}"> <br>
        Cidade:

        <select name="cidade_id">
          <option value="">Selecione:</option>
          <!-- Dados das cidades //-->
          @foreach($cidades as $c)
            <option value="{{ $c->id }}"
              @if ( $c->id == $aluno->cidade_id )
                selected
            @endif>{{ $c->nome }}-{{ $c->estado->sigla }}</option>
          @endforeach
        </select>

       <input type="submit" name="btnSalvar" value="Salvar">

    </form>

@endsection
