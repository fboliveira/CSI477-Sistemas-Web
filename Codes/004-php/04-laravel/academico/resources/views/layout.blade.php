<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>@yield('titulo', 'Sistema Acadêmico')</title>

  </head>
  <body>

    <!-- Flash: mensagem //-->
    @if ( Session::has('mensagem') )
      <p><strong>{{ Session::get('mensagem') }}</strong></p>
    @endif

    <ul>
        <li><a href="/">Principal</a></li>
        <li><a href="/lista">Lista</a></li>
        <li><a href="/info">Informações</a></li>
        <li><a href="/contato">Contato</a></li>
    </ul>

    @yield('conteudo')


  </body>
</html>
