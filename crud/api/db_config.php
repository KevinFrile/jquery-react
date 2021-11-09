<?php
//Definir atributos de la Clase
$hostname = 'localhost';
$database = 'crud_ajax';
$username = 'root';
$password = "";
$dsn = "mysql:host=$hostname;dbname=$database;charset=UTF8";
try { 
$db = new PDO($dsn, $username, $password, [PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION]);
} catch (PDOException $e) {
echo 'Excepción capturada: ', $e->getMessage(), self::$dsn, "\n";
}


?>