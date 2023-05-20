<?php 
include_once("../classes/database.php");
function reportTruckRepair($regNr,$repairArea,$explainRepair ,$image ,$datum) {
    include_once("./../handlers/imageHandler.php");
    $imageUrl = uploadImage($image);

    $database = new Database();
    $query = $database->connection->prepare("INSERT INTO truckRepait (regNr,repairArea,explainRepair,image,datum) VALUES (:regNr,:repairArea,:explainRepair,:image,:datum)");
    $status = $query->execute(array(
        "regNr" => $regNr,
        "repairArea"=>$repairArea,
        "explainRepair"=>$explainRepair,
        "image" => $imageUrl,
        "datum"=>$datum
    ));

    if (!$status){
        throw new Exception("Could not add new product", 500);
        exit;
    }
    return $status;
}

//### Get truck repairs ### //
function getTruckRepairs() {
    $database = new Database();
    $query = $database->connection->prepare("SELECT * FROM truckRepait");
    $query->execute();
    $result = $query->fetchAll(PDO::FETCH_ASSOC);

    if (empty($result)){
        throw new Exception("No product found", 404);
        exit;
    }
    return $result;
}

?>