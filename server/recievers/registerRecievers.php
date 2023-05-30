<?php 

try {
    if($_SERVER["REQUEST_METHOD"] == "POST") {
        if($_POST["action"] == "addNewUser") { 
            include_once("../handlers/registerHandler.php"); 
              echo json_encode(addNewUser(
                $_POST["name"],
                $_POST["password"],
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