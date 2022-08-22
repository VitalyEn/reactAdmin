8 lines (7 sloc)  162 Bytes

<?php

session_start();

if ($_SESSION["auth"] == true) {
    echo json_encode( array("auth" => true) );
} else {
    echo json_encode( array("auth" => false) );
}