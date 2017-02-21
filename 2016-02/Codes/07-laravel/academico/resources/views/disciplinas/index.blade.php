<!DOCTYPE html>
<html lang="en">
    <head>
        <title>Sistema Acadêmico</title>
    </head>
    <body>

        <h1>Disciplinas</h1>

        @foreach($disciplinas as $d)

            <a href="/disciplinas/{{ $d->id }}">{{ $d->nome }}</a> - Codigo: {{ $d->codigo}} - CH: {{ $d->carga}}<br>

        @endforeach

    </body>
</html>
