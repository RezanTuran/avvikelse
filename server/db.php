<?php
header("Access-Control-Allow-Origin: *");

$host = "localhost"; 
$user = "root"; 
$password = "root"; 
$dbname = "icaavvikelse"; 
 
$conn = mysqli_connect($host, $user, $password,$dbname);

$method = $_SERVER['REQUEST_METHOD'];
if (!$conn) {
  die("Connection failed: " . mysqli_connect_error());
}




?>