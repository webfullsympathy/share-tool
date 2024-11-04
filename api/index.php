<!DOCTYPE html>
<?php
    if(isset($_GET["t"])) {
        $text = $_GET["t"];
        echo "https://share-tool.vercel.app?text=".$text;
    }else{
        echo "https://share-tool.vercel.app";
    }
?>