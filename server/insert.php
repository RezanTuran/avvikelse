<?php
include 'db.php';

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
$requireTime = $_POST['requiretime'];
$mileage = $_POST['mileage'];
$storeName = $_POST['storename'];
$city = $_POST['city'];
$quantity = $_POST['quantity'];
$otherinfo = $_POST['otherinfo'];

$query = "INSERT INTO avvikelse 
(firstName,sureName,phoneNumber,driverNumber,loadNumber,date,time,waitTimeGuard,waitTimePort,waitTimeUnloader,waitTimeSearchGoods,waitTimeEmptyGoods,requireTime,mileage,storeName,city,quantity,otherInfo) 
VALUES('$firstname','$surename','$phonenumber','$drivernumber','$loadnumber','$date','$time','$waittimeguard','$waittimeport','$waittimeunloader','$waittimesearchgoods','$waittimeemptygoods','$requireTime','$mileage','$storeName','$city','$quantity','$otherinfo')";

if(mysqli_query($conn, $query)){
    echo "Data has been inserted successfully";
}else{
    echo "Error";
}



?>

