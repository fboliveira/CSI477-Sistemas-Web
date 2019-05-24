<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Acesso ao sistema</title>
  </head>
  <body>

    <form method="post" action="validar.php?acao=1">

      <label for="user">Usuário</label>
      <input type="text" name="usuario" value="" id="user">

      <label for="password">Senha</label>
      <input type="password" name="senha" value="" id="password">

      <input type="submit" name="btnAcessar" value="Acessar">
      <input type="reset" name="btnLimpar" value="Limpar">

    </form>

  </body>
</html>
