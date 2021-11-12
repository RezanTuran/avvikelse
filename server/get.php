<?php
include 'db.php';
 

switch ($method) {
    case 'GET':
      $sql = "SELECT * FROM avvikelse"; 
      break;
}
// run SQL statement
$result = mysqli_query($conn,$sql);
 
// die if SQL statement failed
if (!$result) {
  http_response_code(404);
  die(mysqli_error($conn));
}
 
if ($method == 'GET') {
    if (!$id) echo '[';
    for ($i=0 ; $i<mysqli_num_rows($result) ; $i++) {
      echo ($i>0?',':'').json_encode(mysqli_fetch_object($result));
    }
    if (!$id) echo ']';
}else {
    echo mysqli_affected_rows($conn);
}
 
$conn->close();