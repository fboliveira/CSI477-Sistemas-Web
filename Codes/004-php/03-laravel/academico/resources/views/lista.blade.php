@extends('principal')

@section('conteudo')

  <h2>Lista de pessoas na turma 11</h2>


  <ol>
      @foreach($lista as $a)
        <li>{{ $a }}</li>
      @endforeach
  </ol>




@endsection
