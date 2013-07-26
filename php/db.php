<?php
   $sql_server = "webcloud45.au.syrahost.com";
   $db_username = "optimald_testuse";
   $db_password = "testpass";
   $db_name = "optimald_testdatabase";

   mysql_connect($sql_server, $db_username, $db_password);
   mysql_select_db($db_name);
?>
