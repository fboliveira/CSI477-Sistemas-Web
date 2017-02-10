<!DOCTYPE html>
<html lang="en">
    <head>
        <title>Sistema Acadêmico</title>
    </head>
    <body>

        <h1>Alunos</h1>

        @foreach($alunos as $a)

            <a href="/alunos/{{ $a->id }}">{{ $a->nome }}</a><br>

        @endforeach

    </body>
</html>