<?php

require '../vendor/autoload.php';

use App\Models\Estado;
use App\Database\Connection;
use App\Database\AdapterSQLite;

$estado = new Estado(1, "Minas Gerais", "MG");
var_dump($estado);

$connection = new Connection(new AdapterSQLite());
var_dump($connection);

$connection->getAdapter()->open();

// ------------------------------------------------------------
// Implementar na view de Estados ->
// Imprimir os estados com o adapter implementado:
$sql = "SELECT * FROM estados";
$result = $connection->getAdapter()->get()->query($sql);

echo "<hr><ol>";

while($e = $result->fetch()) {
    echo "<li>" .$e["nome"] . "-" . $e['sigla'] . "</li>\n";
}

echo "</ol><hr>";

// ------------------------------------------------------------

$connection->getAdapter()->close();