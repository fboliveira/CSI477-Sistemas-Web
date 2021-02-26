<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Inserir estados</title>
</head>
<body>
    
    <form action="estadosControllerInsert.php" method="post">
    
        <label for="nome">Nome:</label>
        <input type="text" name="nome" id="nome">

        <label for="sigla">Sigla:</label>
        <input type="text" name="sigla" id="sigla">

        <input type="submit" value="Inserir">

    </form>

</body>
</html>