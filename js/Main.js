//called as soon as <body> finished loading
function initialize(){
}

//called when the mouse overlaps a menu item
function highlight(id){
	if(document.getElementById(id).className == "selectedMenuItem"){
		return;
	}
	document.getElementById(id).className = "highlightedMenuItem";
}

//called when the mouse stops overlapping a menu item
function lowlight(id){
	if(document.getElementById(id).className == "selectedMenuItem"){
		return;
	}
	document.getElementById(id).className = "menuItem";
}

//called when a menu item is clicked
function menuItemClicked(id){
	var selectedMenus = document.getElementsByClassName("selectedMenuItem");
	for(var i=0; i<selectedMenus.length; i++){
		document.getElementById(selectedMenus[i].id).className = "menuItem";
	}
	document.getElementById(id).className = "selectedMenuItem";
	
	if(id == "addData"){
		addData();
	}else if(id == "searchData"){
		searchData();
	}else if(id == "help"){
		help();
	}
}

//called when the addData menu item is clicked
function addData(){
	var content = "<p>space for adding account details to the database</p>";
	document.getElementById("content").innerHTML = content;
}

//called when the searchData menu item is clicked
function searchData(){
	var content = "<p>space for searching for account details on the database</p>";
	document.getElementById("content").innerHTML = content;
}

//called when the help menu item is clicked
function help(){
	var content = "<p>space for advice and demonstrations on how to use this program</p>";
	document.getElementById("content").innerHTML = content;
}