<!DOCTYPE html>
<html lang="en">
    <head>
        <title>Sistema Acadêmico</title>
    </head>
    <body>

        <h1>Cidades</h1>

        @foreach($cidades as $c)

            {{ $c->nome }} <br>

        @endforeach

    </body>
</html>