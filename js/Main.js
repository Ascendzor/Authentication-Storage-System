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
	content += "<div id='clearSubmitDetailsButton' onmousedown='clearSubmitDetailsButton()' class='clearButton'> Clear </div>";
	content += "<div id='submitButton' onmousedown='submitDetailsButton()' type='submit' class='submitButton'> Submit </div>";
	content += "</div>";
	content += "</form>";
	document.getElementById("content").innerHTML = content;
}

/*Called from clicking the submit button within the add to database page, submits user input to database*/
function submitDetailsButton(){

	/*get user input from text boxes*/
	var projectToSubmit = document.getElementById("projectName").value;
	var usernameToSubmit = document.getElementById("username").value;
	var passwordToSubmit = document.getElementById("password").value;
	
	/*issue php to insert user input into database*/
	ajaxRequest("./php/submitDetails.php", "POST", 
	"project="+projectToSubmit+"&username="+usernameToSubmit+"&password="+passwordToSubmit, true, handleSubmitResponse);
	
}

/*Called from clicking the clear button within the add to database page, clears user input from text boxes*/
function clearSubmitDetailsButton(){
	document.getElementById("projectName").value = "";
	document.getElementById("username").value = "";
	document.getElementById("password").value = "";
}

/*Handle response from the submitDetails php*/
function handleSubmitResponse(result){
	if (result == "1"){
		console.log("submitDetails sql success");
	}else{
		console.log("submitDetails sql fail");
	}
}


function search(){
	var keywordToSearch = document.getElementById("searchTextbox").value;
	ajaxRequest("./php/get.php", "POST", "Keyword="+keywordToSearch, true, handleSearchResponse);
}

//called when the Database is searched 
function handleSearchResponse(result){
    var accountDetails = [];
	//take last character off so there's no # at the end which screws up splitting
	//result = result.substring(0, result.length-1);
	
	//split by #
	var accounts = result.split("#");
	
	//populate the accounts object with the results
	for(var i=0; i<accounts.length-1; i++){
		var details = accounts[i].split(",");
		accountDetails[i] = {id: details[0],
                                keyword: details[1],
								username: details[2],
								password: details[3]};
	}
	
	//remove old table to stop table stacking
	var table = document.getElementById("tableSection");
	table.parentNode.removeChild(table);
	
    // Store value of searchtextbox to populate searchbox after changing content.
    var searchTextBoxValue = document.getElementById("searchTextbox").value;
    
	//grab all of the content then add a table populated with the results of the query to the content in the form of a table
	var content = document.getElementById("content").innerHTML;
	content += "<div id='tableSection' class='contentDivider'>";
	content += "<table>";
	content += "<tr class='tableHead'>";
	content += "<td class='searchTableCells'>Keyword</td><td class='searchTableCells'>Username</td><td class='searchTableCells'>Password</td><td class='searchDeleteColumn'></td>";
	content += "</tr>";
	
	//create a row for each accountDetail
	for(var i=0; i<accountDetails.length; i++){
		content += "<tr id='row"+i+"' class='searchTableRow'>";
		content += "<td class='searchTableCells'>"+ accountDetails[i].keyword + "</td><td class='searchTableCells'>" + accountDetails[i].username + "</td><td class='searchTableCells'>" + accountDetails[i].password + "</td><td id='delete" + i +"' class='searchDeleteColumn searchDeleteImage' onclick='deleteRowButton("+accountDetails[i].id+");' + ></td>";
		content += "</tr>";
	}
	content += "</table>";
	content += "</div>";
	document.getElementById("content").innerHTML = content;
    document.getElementById("searchTextbox").value = searchTextBoxValue;
}

//called when the searchData menu item is clicked
function searchContent(){
	var content = "<div class='contentDivider'>";
	content += "<input type='text' id='searchTextbox' class='searchTextbox'>";
	content += "<div id='searchSubmit' onmousedown='search();'> Search </div>";
	content += "<div id='tableSection' class='contentDivider'></div>";
	document.getElementById("content").innerHTML = content;
}

function deleteRowButton(id){
    console.log("Delete row with id: "+id);
    
    ajaxRequest("./php/deleteDetails.php", "POST", "rowid="+id, true, deleteRowResponse);
}

function deleteRowResponse(result){
	if (result == "1"){
		console.log("Delete Row sql success");
	}else{
		console.log("Delete Row sql fail");
	}
    search();
}

//called when the help menu item is clicked
function help(){
	var content = "<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>";
	document.getElementById("content").innerHTML = content;
}