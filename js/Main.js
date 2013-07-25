var example;

function initialize(){
	console.log("initialize method called");
	example =  1;
	var anotherExample = "hi";
}

function highlight(id){
	document.getElementById(id).className = "highlightedMenuItem";
}

function lowlight(id){
	document.getElementById(id).className = "menuItem";
}

function addData(){
	console.log("Adding to database!!!");
}

function searchData(){
	console.log("Searching data...");
}

function help(){
	console.log("...help. HELP!!!");
}