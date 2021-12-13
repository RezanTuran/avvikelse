<?php
include 'db.php';

$firstname = $_POST['name'];
$surename = $_POST['surename'];
$phonenumber = $_POST['phonenumber'];
$drivingType = $_POST['drivingtype'];
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
$waittimeomexport = $_POST['waittimeomexport'];
$includedload = $_POST['includedload'];
$loadnotrady = $_POST['loadnotrady'];
$signature = $_POST['signature'];

$queryKung = "INSERT INTO avvikelseKungalv 
(firstName,sureName,phoneNumber,driverNumber,loadNumber,date,time,waitTimeGuard,waitTimePort,waitTimeUnloader,waitTimeSearchGoods,waitTimeEmptyGoods,requireTime,mileage,storeName,city,quantity,otherInfo,signature) 
VALUES('$firstname','$surename','$phonenumber','$drivernumber','$loadnumber','$date','$time','$waittimeguard','$waittimeport','$waittimeunloader','$waittimesearchgoods','$waittimeemptygoods','$requireTime','$mileage','$storeName','$city','$quantity','$otherinfo','$signature')";

$queryHGB = "INSERT INTO avvikelseHelsingborg 
(firstName,sureName,phoneNumber,drivingType,driverNumber,loadNumber,date,time,waitTimeGuard,waitTimePort,waitTimeUnloader,waitTimeSearchGoods,waitTimeOmexPort,includedLoad,loadNotRady,otherInfo,signature) 
VALUES('$firstname','$surename','$phonenumber','$drivingType','$drivernumber','$loadnumber','$date','$time','$waittimeguard','$waittimeport','$waittimeunloader','$waittimesearchgoods','$waittimeomexport','$includedload','$loadnotrady','$otherinfo','$$signature')";

if(mysqli_query($conn, $queryKung)){
    echo "Data has been inserted successfully Kung";
}
else if(mysqli_query($conn, $queryHGB)){
    echo "Data has been inserted successfully HGB";
}
else{
    echo "Error";
}




?>

