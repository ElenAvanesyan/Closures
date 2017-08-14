function changeOpacity(x) {
	return function() {
		return document.getElementById("image").style.opacity = x;
	}
}
document.getElementById("b").onclick = changeOpacity("0");
document.getElementById("b1").onclick = changeOpacity("0.1");
document.getElementById("b2").onclick = changeOpacity("0.5");
document.getElementById("b3").onclick = changeOpacity("1");
