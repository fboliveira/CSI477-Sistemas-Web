<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Acesso ao sistema</title>
</head>
<body>

    <form action="/login/validar.php" method="post">

        <label for="user">Usuário</label>
        <input type="text" name="usuario" id="user">

        <label for="password">Senha</label>
        <input type="password" name="senha" id="password">
        
        <input type="submit" value="Acessar" name="btnAcessar">
        <input type="reset" value="Limpar" name="btnLimpar">

    </form>

</body>
</html>