<?php
try {
    if($_SERVER["REQUEST_METHOD"] == "POST") {
        if($_POST["action"] == "reportTruckRepair") { 
            include_once("../handlers/truckHandler.php"); 
              echo json_encode(reportTruckRepair(
                $_POST["regNr"],
                $_POST["repairArea"],
                $_POST["explainRepair"],
                $_FILES["image"],
                $_POST["datum"],
            ));
            exit;
        }else {
            throw new Exception("Not a valid endpont", 501);
        }
    }else if($_SERVER["REQUEST_METHOD"] == "GET") {
        if($_GET["action"] == "getTruckRepairs") { 
            include_once("../handlers/truckHandler.php");              
            echo json_encode(getTruckRepairs());
            exit;
        }
} else {
     throw new Exception("Not a valid request method", 405);
} 

} catch(Exception $e) {
    echo json_encode(array("Message" => $e->getMessage(), "Status" => $e->getCode()));
}
?>