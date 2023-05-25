<?php 
function helsinborgForm($firstName,$sureName,$phoneNumber,$drivingType,$driverNumber,$loadNumber,$date,$time,$waitTimeGuard,$waitTimePort,
$waitTimeUnloader,$waitTimeSearchGoods,$waitTimeOmexPort,$includedLoad,$loadNotRady,$otherInfo,$signature) {
    include_once("../classes/database.php");

    $database = new Database();
    $query = $database->connection->prepare(
    "INSERT INTO avvikelseHelsingborg (firstName,sureName,phoneNumber,drivingType,driverNumber,loadNumber,date,time,waitTimeGuard,waitTimePort,waitTimeUnloader,waitTimeSearchGoods,waitTimeOmexPort,includedLoad,loadNotRady,otherInfo,signature) 
    VALUES (:firstName,:sureName,:phoneNumber,:drivingType,:driverNumber,:loadNumber,:date,:time,:waitTimeGuard,:waitTimePort,:waitTimeUnloader,:waitTimeSearchGoods,:waitTimeOmexPort,:includedLoad,:loadNotRady,:otherInfo,:signature)");
    $status = $query->execute(array(
        "firstName" => $firstName,
        "sureName"=>$sureName,
        "phoneNumber"=>$phoneNumber,
        "drivingType"=>$drivingType,
        "driverNumber"=>$driverNumber,
        "loadNumber"=>$loadNumber,
        "date"=>$date,
        "time"=>$time,
        "waitTimeGuard"=>$waitTimeGuard,
        "waitTimePort"=>$waitTimePort,
        "waitTimeUnloader"=>$waitTimeUnloader,
        "waitTimeSearchGoods"=>$waitTimeSearchGoods,
        "waitTimeOmexPort"=>$waitTimeOmexPort,
        "includedLoad"=>$includedLoad,
        "loadNotRady"=>$loadNotRady,
        "otherInfo"=>$otherInfo,
        "signature"=>$signature
    ));

    if (!$status){
        throw new Exception("Could not add new product", 500);
        exit;
    }
    return $status;
}

?>