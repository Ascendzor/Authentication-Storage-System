/*Vasilisa Piyasheva, ajax processing
Directly copied and pasted from Steve Jones week 2 ajax example
Although this can be used in a single javascript file(along with funcations), I found it much neater and easier to keep this separate.*/
function ajaxRequest(url, method, data, asynch, responseHandler)
{
  var request = new XMLHttpRequest();
  request.open(method, url, asynch);

  if (method == "POST")
  	request.setRequestHeader("Content-Type",
                           "application/x-www-form-urlencoded"); 
 
  request.onreadystatechange = function()
  {
    if (request.readyState == 4) {
	if (request.status == 200) {
          responseHandler(request.responseText);
      }
    }
  };
  request.send(data);
}

