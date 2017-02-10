<!DOCTYPE html>
<html lang="en">
    <head>
        <title>Sistema Acadêmico</title>
    </head>
    <body>

        <h1>Estados</h1>

        @foreach($estados as $e)

            {{ $e->nome }} <br>

        @endforeach

    </body>
</html>