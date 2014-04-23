<?php

include '../connection.php';

try {
    $statement = $db->prepare('select * from entries');

    if(!$statement->execute()) {
        throw new Exception(implode(', ', $statement->errorInfo()));
    }
    $jsonResult = array(
        'success' => true,
        'entries' => $statement->fetchAll(PDO::FETCH_ASSOC)
    );
} catch(Exception $e) {
    $jsonResult = array(
        'success' => false,
        'message' => $e->getMessage()
    );
}

echo json_encode($jsonResult);

?>