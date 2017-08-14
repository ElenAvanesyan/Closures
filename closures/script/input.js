function output() {
return function() {
var text = document.getElementById("name").value;
return document.getElementById("output").innerHTML = 'Hello, ' + text + '!';
};}

document.getElementById("name").onchange = output();