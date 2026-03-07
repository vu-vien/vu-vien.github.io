function atile() {
var root = document.querySelector(':root');
root.style.setProperty('--accent','#fde500');
document.getElementById("container").style.color = "black";
document.getElementById("icon1").style.filter = "invert(100%)"
document.getElementById("icon2").style.filter = "invert(100%)"
document.getElementById("icon3").style.filter = "invert(100%)"
document.getElementById("icon4").style.filter = "invert(100%)"
document.getElementById("icon5").style.filter = "invert(100%)"
document.getElementById("icon6").style.filter = "invert(100%)"
document.getElementById("icon7").style.filter = "invert(100%)"
document.getElementById("icon8").style.filter = "invert(100%)"
document.getElementById('bliss').style.display = "none" ;
document.getElementById('water').style.display = "none" ;
document.getElementById('container').style.opacity = 1 ;
document.getElementById("statuscafe").style.color = "black";
	}

var root = document.querySelector(':root');
	function water() {
	document.getElementById('container').style.opacity = 0.5 ;
	document.getElementById('water').style.display = "inherit" ;
	root.style.setProperty('--accent','#00a2ff');
document.getElementById("container").style.color = "white";
document.getElementById("icon1").style.filter = "invert(0%)"
document.getElementById("icon2").style.filter = "invert(0%)"
document.getElementById("icon3").style.filter = "invert(0%)"
document.getElementById("icon4").style.filter = "invert(0%)"
document.getElementById("icon5").style.filter = "invert(0%)"
document.getElementById("icon6").style.filter = "invert(0%)"
document.getElementById("icon7").style.filter = "invert(0%)"
document.getElementById("icon8").style.filter = "invert(0%)"
document.getElementById('bliss').style.display = "none" ;
document.getElementById("statuscafe").style.color = "white";
	}

var root = document.querySelector(':root');
	function bliss() {
	document.getElementById('container').style.opacity = 1 ;
	document.getElementById('bliss').style.display = "inherit" ;
	root.style.setProperty('--accent','rgba(255,255,255,0.5)');
document.getElementById("container").style.color = "black";
document.getElementById("icon1").style.filter = "invert(100%)"
document.getElementById("icon2").style.filter = "invert(100%)"
document.getElementById("icon3").style.filter = "invert(100%)"
document.getElementById("icon4").style.filter = "invert(100%)"
document.getElementById("icon5").style.filter = "invert(100%)"
document.getElementById("icon6").style.filter = "invert(100%)"
document.getElementById("icon7").style.filter = "invert(100%)"
document.getElementById("icon8").style.filter = "invert(100%)"
document.getElementById('water').style.display = "none" ;
document.getElementById("statuscafe").style.color = "black";
	}
