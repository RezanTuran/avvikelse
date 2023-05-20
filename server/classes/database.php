<?php
header("Access-Control-Allow-Origin: *");

class Database {

    function __construct() {
        $dsn = 'mysql:host=localhost;dbname=icaavvikelse;';
        $user = 'root';
        $password = 'root';

    try {
    $this->connection = new PDO($dsn, $user, $password);
    $this->connection->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    echo "Connected successfully";
    } catch(PDOException $e) {
    echo "Connection failed: " . $e->getMessage();
    }

}
}
?>