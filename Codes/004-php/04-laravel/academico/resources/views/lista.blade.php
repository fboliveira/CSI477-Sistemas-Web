@extends('layout')

@section('titulo', 'Lista de pessoas da turma')

@section('conteudo')
  <h1>Lista da turma</h1>


  @foreach($alunos as $a)
    <li>{{ $a }}</li>
  @endforeach


@endsection
