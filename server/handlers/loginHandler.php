<?php
session_start();
// log in site check if the email and the password are match 
function loginUser($name, $password) { 
    include_once("../classes/database.php");
    $database = new Database();
    $select = $database->connection->prepare("SELECT * FROM users WHERE name=:name AND password=:password ");
    $select->bindParam(":name", $name);
    $hash = hash('ripemd160', $password);
    $select->bindParam(":password", $hash);

    $select->execute();
    $user = $select->fetch(PDO::FETCH_ASSOC);

    error_log(json_encode($user));
    if($user) {
        $_SESSION["name"]=$name;
        return true;
    } else {
        return false;
    }
}
?>