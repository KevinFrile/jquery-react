<?php
require 'db_config.php';
$id = $_POST["id"];
$post = $_POST;
$sql = "UPDATE items SET title = '".$post['title']."',description = '".$post['description']."'WHERE id = '".$id."'";
$result = $db->query($sql);
$sql = "SELECT * FROM items WHERE id = '".$id."'";
$result = $db->query($sql);
$data = $result->fetch(PDO::FETCH_ASSOC);
echo json_encode($data);
?>