<?php

namespace App\Models;

interface ModelInterface {

    public function getAll();
    public function get($id);

}