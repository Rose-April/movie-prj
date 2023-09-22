// Function to get the value of a URL parameter by name
function getParameterByName(name, url) {
  if (!url) {
    url = window.location.href;
  }
  name = name.replace(/[\[\]]/g, "\\$&");
  var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
    results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return "";
  return decodeURIComponent(results[2].replace(/\+/g, " "));
}

// Get the 'em' parameter from the URL
var em = getParameterByName("em");

// Find the iframe element by its ID
var iframe = document.getElementById("myIframe");

// Check if the 'id' parameter exists in the URL
if (em !== null) {
  // Update the src attribute of the iframe with the new URL including the 'id' parameter
  iframe.src = iframe.src + "/" + em;
} else {
  // Handle the case where the 'em' parameter is not present in the URL
  alert('The "em" parameter is missing from the URL.');
}
