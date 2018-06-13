<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Lista de Estados</title>
  </head>
  <body>

    @foreach( $estados as $e )

      <p>{{ $e->id }} - {{ $e->nome }} - {{ $e->sigla }}</p> 

    @endforeach












  </body>
</html>
