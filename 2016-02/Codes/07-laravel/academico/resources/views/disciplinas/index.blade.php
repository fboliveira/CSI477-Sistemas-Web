@extends('layout.principal')

@section('conteudo')

        <h1>Disciplinas</h1>

        @foreach($disciplinas as $d)

            <a href="/disciplinas/{{ $d->id }}">{{ $d->nome }}</a> - Codigo: {{ $d->codigo}} - CH: {{ $d->carga}}<br>

        @endforeach

@endsection
