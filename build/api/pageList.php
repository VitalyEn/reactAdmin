<?php
session_start();
if($_SESSION["auth"] != true){
    header("HTTP/1.0 403 Forbidden");
    die;
}

$hmlfiles =glob("../../*.html");
$response = [];
foreach($hmlfiles as $file){
    array_push($response, basename($file));
}
echo json_encode($response);