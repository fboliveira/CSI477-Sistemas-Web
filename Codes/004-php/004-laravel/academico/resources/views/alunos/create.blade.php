@extends('layout.principal')

@section('conteudo')

    <h1>Inserir aluno(a)</h1>

    <a href="{{ route('alunos.index') }}">Voltar</a>

    <form method="post" action="{{ route('alunos.store') }}">

        @csrf

        Nome: <input type="text" name="nome"> <br>
        Cidade:
          <select name="cidade_id">
            <option value="">Selecione:</option>
            <!-- Dados das cidades //-->
            @foreach($cidades as $c)
              <option value="{{ $c->id }}">{{ $c->nome }}-{{ $c->estado->sigla }}</option>
            @endforeach
          </select>

        <input type="submit" name="btnSalvar" value="Salvar">

    </form>

@endsection
