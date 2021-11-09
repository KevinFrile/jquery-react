<?php
require 'db_config.php';

$num_rec_per_page = 8;

if (isset($_GET["page"])) {
    $page = $_GET["page"];
} else {
    $page = 1;
};

$start_from = ($page - 1) * $num_rec_per_page;


$sqlTotal = "SELECT * FROM items";

$sql = "SELECT * FROM items Order By id desc LIMIT $start_from, $num_rec_per_page";

$result = $db->query($sql);

while ($row = $result->fetch(PDO::FETCH_ASSOC)) {
    $json[] = $row;
}

$data['data'] = $json;
$result = $db->query($sqlTotal);
$data['total'] = $result->rowCount();

echo json_encode($data);

?>