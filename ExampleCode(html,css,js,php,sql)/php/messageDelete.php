<?php
/* echo Vasilisa Piyasheva, grabs a string of ids separated by comma, from javascript
 echo Reference: php syntaxing heavily used from Steve Jones' blog example, 2011
 foreach loops - http://php.net/manual/en/control-structures.foreach.php, looked on 21/03/12*/
 
 
	require_once('db.php');
	/* echo Grabs the string of ids using messageID*/
	$messageID = $_POST['messageID'];
	/* echo splits the string, using comma character inbetween the values*/
	$splitID = split(",", $messageID);
	/* echo foreach id split, adds the value to tmp 'array'*/
	foreach($splitID as $tmp){	
	/* echo performs the query to insert the id into deleted folder and remove from the inbox folder*/
		$queryInsert =  "INSERT INTO deleted (`id`) VALUES ('$tmp')";
		$queryDelete = "DELETE FROM inbox WHERE id=$tmp";
		mysql_query($queryInsert);
		mysql_query($queryDelete);
		}
		
   	mysql_close();
   	
   echo "inbox";
?>