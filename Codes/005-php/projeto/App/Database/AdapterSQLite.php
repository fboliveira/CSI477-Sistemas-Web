<?php

namespace App\Database;

use PDO;

class AdapterSQLite implements AdapterInterface {

    // Verifique o caminho do arquivo conforme a sua estrutura.    
    private $dbfile = __DIR__ . "/../../../dados/db/database.sqlite";

    private $strConnection = "sqlite:";

    private $connection = null;

    public function open() {

        try {

            $this->connection = new PDO($this->strConnection . $this->dbfile);       
        
            print "Database: success.";
        
        } catch(Expection $e) {
            die("Database error: " . $e->getMessage());
        }

    }

    public function close() {
        $this->connection = null;
    }

    public function get() {
        if ( $this->connection === null ) {
            $this->connection->open();
        }
        return $this->connection;
    }

}