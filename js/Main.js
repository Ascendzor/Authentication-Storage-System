//called as soon as <body> finished loading
function initialize(){
}

//called when a menu item is clicked
function menuItemClicked(id){
	var lastClicked = $('.menuItemClicked').get();
	for(var i=0; i<lastClicked.length; i++){
		document.getElementById(lastClicked[i].id).className = "menuItem menuItemIdle";
	}
	document.getElementById(id).className = "menuItem menuItemClicked";
	
	if(id == "addData"){
		addData();
	}else if(id == "searchData"){
		searchContent();
	}else if(id == "help"){
		help();
	}
}


function pingTestPhp(){
	ajaxRequest("./php/ping.php", "POST", "", true, pingHandle);
}

function pingHandle(result){
	console.log(result);
}

//called when the addData menu item is clicked
function addData(){
	var content = "<form>";
	content += "<label class='displayLabel'> Project Name </label>";
	content += "<div class='inputSection'>";
	content += "<input id='projectName' type='text' class='addTextBox'>";
	content += "</div>";
	content += "<div class='inputSection'>";
	content += "<label class='displayLabel'> Username </label>";
	content += "<input id='username' type='text' class='addTextBox'>";
	content += "</div>";
	content += "<div class='inputSection'>";
	content += "<label class='displayLabel'> Password </label>";
	content += "<input id='password' type='text' class='addTextBox'>";
	content += "</div>";
	content += "<div class='inputSection'>";
	content += "<div class='clearButton'> Clear </div>";
	content += "<div id='submitButton' onmousedown='submitDetailsButton()' type='submit' class='submitButton'> Submit </div>";
	content += "</div>";
	content += "</form>";
	document.getElementById("content").innerHTML = content;
}

function submitDetailsButton(){
	var projectToSubmit = document.getElementById("projectName").value;
	var usernameToSubmit = document.getElementById("username").value;
	var passwordToSubmit = document.getElementById("password").value;
	
	ajaxRequest("./php/submitDetails.php", "POST", 
	"project="+projectToSubmit+"&username="+usernameToSubmit+"&password="+passwordToSubmit, true, tester);
	
	
}

function tester(result){
	console.log(result);
}

var keywords = [];
var usernames = [];
var passwords = [];
var accountDetails = [];
function search(){
	var keywordToSearch = document.getElementById("searchTextbox").value;
	
	ajaxRequest("./php/get.php", "POST", "Keyword="+keywordToSearch, true, getHandle);
	//query the database using keywordToSearch as the keyword and store the values in their respective array
	
	/* DUMMY DATA */
	keywords[0] = "www.enlightenDesigns.co.nz";
	usernames[0] = "leEnlightenDesigns";
	passwords[0] = "1337h4x0r";
	
	keywords[1] = "exampleKeyword";
	usernames[1] = "exampleUsername";
	passwords[1] = "examplePassword";

	keywords[2] = "Marcellion";
	usernames[2] = "Is";
	passwords[2] = "Sexy";
	/* END OF DUMMY DATA */
	
	//delete the table before adding the new refreshed one
	var table = document.getElementById("tableSection");
	table.parentNode.removeChild(table);
	
	//grab all of the content then add a table populated with the results of the query to the content in the form of a table
	var content = document.getElementById("content").innerHTML;
	content += "<div id='tableSection' class='contentDivider'>";
	content += "<table>";
	content += "<tr class='tableHead'>";
	content += "<td>Keyword</td><td>Username</td><td>Password</td>";
	content += "</tr>";

	for(var i=0; i<keywords.length; i++){
		content += "<tr id='row"+i+"' class='searchTableRow'>";
		content += "<td>"+keywords[i] + "</td><td>" + usernames[i] + "</td><td>" + passwords[i] + "</td>";
		content += "</tr>";
	}
	content += "</table>";
	content += "</div>";
	document.getElementById("content").innerHTML = content;
}

//called when the Database is searched 
function getHandle(result)
{
	console.log(result);
}

//called when the searchData menu item is clicked
function searchContent(){
	var content = "<div class='contentDivider'>";
	content += "<input type='text' id='searchTextbox' class='searchTextbox'>";
	content += "<div id='searchSubmit' onmousedown='search();'> Search </div>";
	content += "<div id='tableSection' class='contentDivider'></div>";
	document.getElementById("content").innerHTML = content;
}

//called when the help menu item is clicked
function help(){
	var content = "<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>";
	document.getElementById("content").innerHTML = content;
}