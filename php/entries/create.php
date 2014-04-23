<?php

include '../connection.php';

try {
    $params = json_decode(file_get_contents('php://input'));
    unset($params->id);

    $statement = $db->prepare('insert into entries (firstname, lastname, phone) values(:firstname, :lastname, :phone)');

    foreach($params as $key => &$value) {
        $statement->bindParam(":$key", $value);
    }

    if(!$statement->execute()) {
        throw new Exception(implode(', ', $statement->errorInfo()));
    }
    $params->id = $db->lastInsertId();
    $jsonResult = array(
        'success' => true,
        'entries' => $params
    );
} catch(Exception $e) {
    $jsonResult = array(
        'success' => false,
        'message' => $e->getMessage()
    );
}

echo json_encode($jsonResult);

?>