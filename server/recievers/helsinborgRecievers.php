<?php
try {
    if($_SERVER["REQUEST_METHOD"] == "POST") {
        if($_POST["action"] == "helsinborgForm") { 
            include_once("../handlers/helsinborgHandler.php"); 
              echo json_encode(helsinborgForm(
                $_POST["firstName"], 
                $_POST["sureName"],
                $_POST["phoneNumber"],
                $_POST["drivingType"],
                $_POST["driverNumber"],
                $_POST["loadNumber"],
                $_POST["date"],
                $_POST["time"],
                $_POST["waitTimeGuard"],
                $_POST["waitTimePort"],
                $_POST["waitTimeUnloader"],
                $_POST["waitTimeSearchGoods"],
                $_POST["waitTimeOmexPort"],
                $_POST["includedLoad"],
                $_POST["loadNotRady"],
                $_POST["otherInfo"],
                $_POST["signature"],

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