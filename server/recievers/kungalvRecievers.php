<?php
try {
    if($_SERVER["REQUEST_METHOD"] == "POST") {
        if($_POST["action"] == "kungalvForm") { 
            include_once("../handlers/kungalvHandler.php"); 
              echo json_encode(kungalvForm(
                $_POST["firstName"],
                $_POST["sureName"],
                $_POST["phoneNumber"],
                $_POST["driverNumber"],
                $_POST["loadNumber"],
                $_POST["deliveryArea"],
                $_POST["date"],
                $_POST["time"],
                $_POST["waitTimeGuard"],
                $_POST["waitTimePort"],
                $_POST["waitTimeUnloader"],
                $_POST["waitTimeSearchGoods"],
                $_POST["waitTimeEmptyGoods"],
                $_POST["requireTime"],
                $_POST["mileage"],
                $_POST["storeName"],
                $_POST["storeNumber"],
                $_POST["city"],
                $_POST["quantity"],
                $_POST["otherinfo"],
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