<?php
 require_once("db.php");
 $rowToDelete = $_POST['rowid'];
 $queryDelete = "DELETE FROM ZaCtest WHERE ID='$rowToDelete'";
 
 echo mysql_query($queryDelete);
 
 mysql_close();
?>