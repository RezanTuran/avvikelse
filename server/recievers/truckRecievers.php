<?php
try {
    if($_SERVER["REQUEST_METHOD"] == "POST") {
        if($_POST["action"] == "add") { 
            include_once("../handlers/truckHandler.php"); 
              echo json_encode(add(
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
    } 

} catch(Exception $e) {
    echo json_encode(array("Message" => $e->getMessage(), "Status" => $e->getCode()));
}
?>