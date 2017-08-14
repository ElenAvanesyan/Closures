function changeColor(x)  {
	return function() { 
	return document.body.style.background = x; 
} }

document.getElementById("green").onclick = changeColor("green");
document.getElementById("blue").onclick = changeColor("blue");
document.getElementById("red").onclick = changeColor("red");
