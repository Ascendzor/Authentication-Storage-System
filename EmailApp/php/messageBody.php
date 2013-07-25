<?php
/* echo Vasilisa Piyasheva, grabs single message's information from SQL
Reference: php syntaxing heavily used from Steve Jones' blog example, 2011*/
	require_once('db.php');   
   /* echo Grabs information from SQL of a single message */
   $messageID = $_POST['messageID'];
   if($messageID != ""){
   	$query = "Select * from message WHERE id=$messageID";
   }
   $result = mysql_query($query);
   	
   	while($row = mysql_fetch_assoc($result)){
   		echo "From: " . $row['from'] . "<br>To: " . $row['to'] . "<br>Subject: " . $row['subject']."<br>". $row['body'];
   		}
   		mysql_close();
?>