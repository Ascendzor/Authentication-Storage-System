<?php
require_once("db.php");
$query = "Select * from ZaCtest";
$result = mysql_query($query);
while($tmp = mysql_fetch_assoc($result)){
	echo " " . $tmp['ID']." " . $tmp['Keyword']." " .$tmp['Username']." ".$tmp['Password']. "#";
}
mysql_close();
?>