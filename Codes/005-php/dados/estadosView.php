<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Lista de estados</title>
</head>
<body>
    
    <a href="/dados/estadosViewInsert.php">Inserir</a>

    <ol>
        <?php 
            while($e = $estados->fetch()) {
                echo "<li>" .$e["nome"] . "-" . $e['sigla'] . "</li>\n";
            }
        ?>
    </ol>
    
</body>
</html>