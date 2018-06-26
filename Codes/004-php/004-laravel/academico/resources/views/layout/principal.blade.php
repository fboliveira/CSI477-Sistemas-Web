<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Sistema Acadêmico</title>
    <link rel="stylesheet" href="{{ asset('css/app.css') }}">
  </head>
  <body>

    <!-- Flash: mensagem //-->
    @if ( Session::has('mensagem') )
      <p class="alert alert-info">{{ Session::get('mensagem') }}</p>
    @endif

    <!-- LINKS //-->
    <a href="/estados">Estados</a>
    <a href="{{ route('cidades.index') }}">Cidades</a>
    <a href="#">Alunos</a>
    <a href="#">Turmas</a>
    <a href="#">Notas</a>

    <!-- CONTEUDO //-->
    @yield('conteudo')







  </body>
</html>
