<?php

namespace App\Database;

class AdapterSQLite implements AdapterInterface {

    public function open() {    
        echo "<br>AdapterSQLite: open()<br>";    
    }

    public function close() {
        echo "<br>AdapterSQLite: close()<br>";    

    }

    public function get() {
        echo "<br>AdapterSQLite: get()<br>";    
    }

}