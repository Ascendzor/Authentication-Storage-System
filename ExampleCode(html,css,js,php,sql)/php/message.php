<?php
/* echo Vasilisa Piyasheva, grabs the main message information from SQL
Reference: php syntaxing heavily used from Steve Jones' blog example, 2011*/
	require_once('db.php');   
   
   $messageType = $_POST['messageType'];
   /* echo Gets all the messages from main message table in SQL where messages' id is equal to the requested messages id*/
   if ($messageType != ""){
   	$query = "Select * from message, $messageType WHERE message.id=".$messageType.".id";
   	
   }
   /* echo echoes a table depending on what type of folder string is received from html*/
   echo "<table>";
   
   if($messageType == "inbox")
   	echo "<tr><th width='5%'></th><th width='20%'>From:</th><th width='20%'>Subject:</th><th width='30%'>Date Recieved:</th></tr>";
   if($messageType == "sent")
   	echo "<tr><th width='5%'></th><th width='20%'>From:</th><th width='20%'>To:</th><th width='30%'>Subject:</th><th width='25%'>Date Sent:</th></tr>";
   	if($messageType == "deleted")
   	echo "<tr><th width='5%'></th><th width='10%'>From:</th><th width='10%'>To:</th><th width='20%'>Subject:</th><th width='25%'>Date Received:</th><th width='25%'>Date sent:</th></tr>";
   
   $result = mysql_query($query);
   /* echo performs query, and only echoes data as required for each inbox/deleted/sent folders
   echo each line of data is echoed in table cells, also includes a checkbox if folder is inbox.*/
   while($row = mysql_fetch_assoc($result)){
   	if($messageType == "inbox")
   	echo "<tr><td><input type='checkbox' name='idDelete' value='".$row['id']."'></td><td><a href='#' onclick='Javascript:getID(".$row['id'].")'>" . $row['from']. "</a></td><td>" . $row['subject'] . "</td><td>" . $row['dateReceived']."</td></tr>";
   	if($messageType == "sent")
   	echo "<tr><td></td><td><a href='#' onclick='Javascript:getID(".$row['id'].")'>" . $row['from']. "</a></td><td>" . $row['to']."</td><td>" . $row['subject'] . "</td><td>" . $row['dateSent']."</td></tr>";
   	if($messageType == "deleted")
   	echo "<tr><td></td><td><a href='#' onclick='Javascript:getID(".$row['id'].")'>" . $row['from']. "</a></td><td>" . $row['to']."</td><td>" . $row['subject'] . "</td><td>" . $row['dateReceived']."</td><td>" . $row['dateSent']."</td></tr>";
   } 	
   echo "</table>";
   mysql_close();
?>




