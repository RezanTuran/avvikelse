<?php
header("Access-Control-Allow-Origin: *"); //add this CORS header to enable any domain to send HTTP requests to these endpoints:
$host = "localhost"; 
$user = "root"; 
$password = "root"; 
$dbname = "react_php"; 
 
$conn = mysqli_connect($host, $user, $password,$dbname);

$method = $_SERVER['REQUEST_METHOD'];
if (!$conn) {
  die("Connection failed: " . mysqli_connect_error());
}