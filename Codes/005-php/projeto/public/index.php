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
$connection->getAdapter()->get();
$connection->getAdapter()->close();