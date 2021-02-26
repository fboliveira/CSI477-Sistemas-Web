<?php

namespace App\Database;

class Connection {

    private $adapter;

    public function __construct(AdapterInterface $adapter) {
        $this->adapter = $adapter;
    }

    public function getAdapter() {
        return $this->adapter;
    }

}