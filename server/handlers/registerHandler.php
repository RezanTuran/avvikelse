<?php

function addNewUser($name, $password) {
    include_once("./../classes/database.php");
    $database = new Database();
    $query = $database->connection->prepare("INSERT INTO users (name,password) VALUES (:name, :password)");
    $status = $query->execute(array(
        "name"=>$name,
        "password"=>hash('ripemd160',$password),
        
    ));
    if (!$status){
        throw new Exception("Couldn't add the user, something went wrong", 500);
        exit;
    }
    return $status;
}