<?php

/*
 * File:   Connection.php
 * Author: Fernando B Oliveira
 * Created on: Dec 11, 2015, 1:00 PM
 * Last update: Oct 31, 2016, 4PM.
 * Description: MySQL connection
 */

class Connection {

    private $connected = false;
    private $connection = NULL;
    private $db_server, $db_username, $db_password, $db_base;

    public function __construct()
    {
        require 'config.php';

        $this->db_server = $set_db_server;
        $this->db_username = $set_db_username;
        $this->db_password = $set_db_password;
        $this->db_base = $set_db_base;

    }

    public function set() {
      echo "Variables set $this->db_server, $this->db_username, $this->db_password, $this->db_base <br />";
    }

    function connect() {

      $conn = new mysqli($this->db_server,
            $this->db_username, $this->db_password, $this->db_base);

      if ($conn->connect_errno) {
          die("Erro ao conectar no MySQL: " .
            $mysqli->connect_errno . " - " . $mysqli->connect_error);
            
      } else {
       $this->connected = true;
       $this->connection = $conn;
      }

    }

    function status() {
      return $this->connected;
    }

    function getConnection() {

      if($this->status() == false)
        $this->connect();

      return $this->connection;

    }

    function execute($sql) {

      return $this->getConnection()->query($sql);

    }

  }

 ?>
