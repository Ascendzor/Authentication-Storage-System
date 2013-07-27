<?php
/* echo Vasilisa Piyasheva, grabs values from html form elements (inputted by user, and put into a single string using javascript functions), 
echo and inserts the values into sql table
echo Reference: php syntaxing heavily used from Steve Jones' blog example, 2011
foreach loops - http://php.net/manual/en/control-structures.foreach.php, looked on 21/03/12*/
	require_once('db.php');
	$messageTo = $_POST['to'];
	$messageFrom = $_POST['from'];
	$messageSubject = $_POST['subject'];
	$messageBody = $_POST['body'];
	
	$queryMessage = "INSERT INTO message (`to`, `from`, `subject`, `dateReceived`, `dateSent`, `body`) VALUES ('$messageTo', '$messageFrom', '$messageSubject', NOW(), NOW(), '$messageBody')";
	mysql_query($queryMessage); 
	      
	/* echo Grabs the last generated id to increment */
	$messagesID = "Select LAST_INSERT_ID()";
	$result =  mysql_query($messagesID);
	$IDarray = mysql_fetch_assoc($result);
	
	/* echo foreach IDarray, we increment the id, and store the result in tmp */
	foreach($IDarray as $value){
		$tmp =$value; 
	} 
	/* echo insert the id into sent table */ 
   $querySent = "INSERT INTO sent (`id`) VALUES ('$tmp')";
   mysql_query($querySent);
      mysql_close();
   echo "sent";
?>