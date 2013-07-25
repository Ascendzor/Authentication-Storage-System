//called as soon as <body> finished loading
function initialize(){
}

//called when a menu item is clicked
function menuItemClicked(id){
	var lastClicked = $('.menuItemClicked').get();
	console.log(lastClicked);
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

//called when the addData menu item is clicked
function addData(){
	var content = "<form>";
	content += "<label class='displayLabel'> Project Name </label>";
	content += "<div class='inputSection'>";
	content += "<input id='projectName' type='text' class='inputTextbox'>";
	content += "</div>";
	content += "<div class='inputSection'>";
	content += "<label class='displayLabel'> Username </label>";
	content += "<input id='username' type='text' class='inputTextbox'>";
	content += "</div>";
	content += "<div class='inputSection'>";
	content += "<label class='displayLabel'> Password </label>";
	content += "<input id='password' type='text' class='inputTextbox'>";
	content += "</div>";
	content += "<div class='inputSection'>";
	content += "<div class='clearButton'> Clear </div>";
	content += "<div type='submit' class='submitButton'> Submit </div>";
	content += "</div>";
	content += "</form>";
	document.getElementById("content").innerHTML = content;
}

function rowHighlight(id){
	document.getElementById("row"+id).style.background = "#FFF";
}

function rowLowlight(id){
	document.getElementById("row"+id).style.background = "";
}

var keywords = [];
var usernames = [];
var passwords = [];
function search(){
	var keywordToSearch = document.getElementById("textboxKeyword");
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
		content += "<tr id='row"+i+"' onmouseover='rowHighlight("+i+")' onmouseout='rowLowlight("+i+")'>";
		content += "<td>"+keywords[i] + "</td><td>" + usernames[i] + "</td><td>" + passwords[i] + "</td>";
		content += "</tr>";
	}
	content += "</table>";
	content += "</div>";
	document.getElementById("content").innerHTML = content;
}

//called when the searchData menu item is clicked
function searchContent(){
	var content = "<div class='contentDivider'>";
	content += "<label class='labelDisplay'> Keyword </label>";
	content += "<input type='text' id='textboxKeyword' class='textInput'>";
	content += "<div id='searchSubmit' class='submitSearch' onmousedown='search();'> Search </div>";
	content += "<div id='tableSection' class='contentDivider'></div>";
	document.getElementById("content").innerHTML = content;
}

//called when the help menu item is clicked
function help(){
	var content = "<p>space for advice and demonstrations on how to use this program</p>";
	document.getElementById("content").innerHTML = content;
}