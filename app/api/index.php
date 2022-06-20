<?php
$hmlfiles =glob("../../*.html");
$response = [];
foreach($hmlfiles as $file){
    array_push($response, basename($file));
}
echo json_encode($response);