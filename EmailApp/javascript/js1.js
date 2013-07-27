/*Vasilisa Piyasheva, javascript containing functions required to run the email application
Reference: Steve Jones' lecture notes and printers/images examples of ajax, week 2, 2012
array.push example is taken from http://www.w3schools.com/jsref/jsref_push.asp on 21/03/12*/

/*Grabs the string variable from the clicked link and passes it as a parameter, 
it then uses it as a variable to pass to message.php
php then echoes the corresponding data, and places it into div, using getBody function.
-- This process of getting information from html, passing it to php, and echoing it back is repeatedly used 
where ajaxRequest method is used */
function getMessage(messageType){
	ajaxRequest("../php/message.php", "POST", "messageType="+messageType, true, getBody);
	var div2 = document.getElementById("content2");
	div2.innerHTML = "";
}

//Gets the messages id to display its message body
function getID(messageID){
	ajaxRequest("../php/messageBody.php", "POST", "messageID="+messageID, true, showBody);
}

//Gets the id of the ticked messages, to send to php and delete.
function deleteMessage(){
	//Creates a variable which contains all inputs of the form
	var docInputs = document.getElementsByTagName("input");
	//Creating temporary arrays
	var docArray = new Array(); 
	var checkBoxArray = new Array();
	//Creating a variable to store the final string of ids
	var messageID = "";
	
	//Checking all the inputs in the form 
	for(var i = 0; i < docInputs.length; i++){
		//If input type is checkbox, add the inputs to docArray array.
		if(docInputs[i].type == "checkbox"){
			docArray.push(docInputs[i]);
			//if checkbox inputs are checked, add the final result to checkBoxArray array.
			if(docArray[i].checked){
				checkBoxArray.push(docArray[i]);	
			}		
		}
	}
	
	//Loop through all the checked checkboxes, and add the result to messageID variable, separated by comma.
	for (var i = 0; i < checkBoxArray.length; i++){
		messageID = messageID+checkBoxArray[i].value+",";
	}
	//Final string is sent to php(since the will always be "" in the end of the last comma, it reads it as id 0
	//so we don't want that, we create a fake very high id, phisically unreachable by sql.
	ajaxRequest("../php/messageDelete.php", "POST", "messageID="+messageID+"10000", true, getMessage);
}

//Gets the response from php, and fills content1 div with the corresponding information into html
function getBody(responseText){
			var div = document.getElementById("content1");
			div.innerHTML = responseText;	
}
//Gets the repsponse from php, and fills content2 div with the corresponding information into html
function showBody(responseText){
	var div2 = document.getElementById("content2");
	div2.innerHTML = responseText;
}	
//Creates a form, with all the html elements manually coded into the content1 div.
function createForm(){
	var div = document.getElementById("content1");
	var div2 = document.getElementById("content2");
	div2.innerHTML = "";
	div.innerHTML = "<form id='messageForm' action='Javascript:sendMessage()'><label for='toField'>To: </label><input type='text' id='toField' name='toFieldValue'><br><label for='FromField'>From: </label><input type='text' id='fromField' name='fromFieldValue'><br><label for='subjectField'>Subject: </label><input type='text' id='subjectField' name='subjectFieldValue'><br><textarea rows='10' cols='150' id='body' name='bodyValue'>Write message here.</textarea><br><input type='submit' value='Send'></form>";
}

//Gets the values inputted by the user, and sends it to a php as a string 'temp'.
function sendMessage(){
	var form = document.getElementById("messageForm");
	var temp = "to="+form.elements["toFieldValue"].value+"&from="+form.elements["fromFieldValue"].value+"&subject="+form.elements["subjectFieldValue"].value+"&body="+form.elements["bodyValue"].value;
	ajaxRequest("../php/messageNew.php", "POST", temp, true, getMessage);
}