<?php
// DB Connection
$serverName = "localhost";
$username = "root";
$password = "root";
$database = "react_php";

$conn = mysqli_connect($serverName, $username, $password,$database);

$firstname = $_POST['name'];
$surename = $_POST['surename'];
$phonenumber = $_POST['phonenumber'];
$drivernumber = $_POST['drivernumber'];
$loadnumber = $_POST['loadnumber'];
$date = $_POST['date'];
$time = $_POST['time'];
$waittimeguard = $_POST['waittimeguard'];
$waittimeport = $_POST['waittimeport'];
$waittimeunloader = $_POST['waittimeunloader'];
$waittimesearchgoods = $_POST['waittimesearchgoods'];
$waittimeemptygoods = $_POST['waittimeemptygoods'];

$query = "INSERT INTO avvikelse 
(firstName,sureName,phoneNumber,driverNumber,loadNumber,date,time,waitTimeGuard,waitTimePort,waitTimeUnloader,waitTimeSearchGoods,waitTimeEmptyGoods) 
VALUES('$firstname','$surename','$phonenumber','$drivernumber','$loadnumber','$date','$time','$waittimeguard','$waittimeport','$waittimeunloader','$waittimesearchgoods','$waittimeemptygoods')";


if(mysqli_query($conn, $query)){
    echo "Data has been inserted successfully";
}else{
    echo "Error";
}

?>

