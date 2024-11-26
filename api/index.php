<?php
    if(isset($_GET["t"])) {
        $text = $_GET["t"];
        echo "https://m.share-tool.net?text=".$text;
    }else{
        echo "https://m.share-tool.net";
    }
?>