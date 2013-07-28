<?php
 require_once("db.php");
 
 $project = $_POST['project'];
 $username = $_POST['username'];
 $password = $_POST['password'];
 
 $queryMessage = "INSERT INTO ZaCtest (`Keyword`, `Username`, `Password`) VALUES ('$project', '$username', '$password')";
 
 echo mysql_query($queryMessage);

 mysql_close();
?>