<?php 
function kungalvForm($firstName,$sureName,$phoneNumber,$driverNumber,$loadNumber,$deliveryArea,$date,$time,$waitTimeGuard,$waitTimePort,
$waitTimeUnloader,$waitTimeSearchGoods,$waitTimeEmptyGoods,$requireTime,$mileage,$storeName,$storeNumber,$city,$quantity,$otherinfo,$signature) {
    include_once("../classes/database.php");

    $database = new Database();
    $query = $database->connection->prepare(
    "INSERT INTO avvikelseKungalv (firstName,sureName,phoneNumber,driverNumber,loadNumber,deliveryArea,date,time,waitTimeGuard,waitTimePort,waitTimeUnloader,waitTimeSearchGoods,waitTimeEmptyGoods,requireTime,mileage,storeName,storeNumber,city,quantity,otherinfo,signature) 
    VALUES (:firstName,:sureName,:phoneNumber,:driverNumber,:loadNumber,:deliveryArea,:date,:time,:waitTimeGuard,:waitTimePort,:waitTimeUnloader,:waitTimeSearchGoods,:waitTimeEmptyGoods,:requireTime,:mileage,:storeName,:storeNumber,:city,:quantity,:otherinfo,:signature)");
    $status = $query->execute(array(
        "firstName" => $firstName,
        "sureName"=>$sureName,
        "phoneNumber"=>$phoneNumber,
        "driverNumber"=>$driverNumber,
        "loadNumber"=>$loadNumber,
        "deliveryArea"=>$deliveryArea,
        "date"=>$date,
        "time"=>$time,
        "waitTimeGuard"=>$waitTimeGuard,
        "waitTimePort"=>$waitTimePort,
        "waitTimeUnloader"=>$waitTimeUnloader,
        "waitTimeSearchGoods"=>$waitTimeSearchGoods,
        "waitTimeEmptyGoods"=>$waitTimeEmptyGoods,
        "requireTime"=>$requireTime,
        "mileage"=>$mileage,
        "storeName"=>$storeName,
        "storeNumber"=>$storeNumber,
        "city"=>$city,
        "quantity"=>$quantity,
        "otherinfo"=>$otherinfo,
        "signature"=>$signature,
    ));

    if (!$status){
        throw new Exception("Could not add new product", 500);
        exit;
    }
    return $status;
}

?>