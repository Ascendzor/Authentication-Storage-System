<?php
require_once("db.php");
$field = $_POST['Keyword'];
$query = "SELECT * FROM ZaCtest WHERE Keyword='".$field."'";
$result = mysql_query($query);
while($tmp = mysql_fetch_assoc($result)){
	echo $tmp['ID'].",".$tmp['Keyword'].",".$tmp['Username'].",".$tmp['Password']."#";
}
mysql_close();
?>