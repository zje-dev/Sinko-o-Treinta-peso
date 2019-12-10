const FD = {
	"0" : ["Sinko", "47"],
	"1": ["Dies", "47"],
	"2": ["Kinse", "47"],
	"3": ["Beinte", "47"],
	"4": ["Beinte y sinko", "47"],
	"5": ["Tr\u00EBinta", "47"]
}
var BG = true;
var TX = true;
var W = 380;
var H = 300;
var X = 0;

window.onload = function () {
	menu();
}

function menu () {
	X = 0;
	var Ldom = document.getElementById("largo").value;
	var canvas = document.getElementById("area");
	var GBC = document.getElementById("back");
	var ctx = canvas.getContext("2d");
	var ctx2 = GBC.getContext("2d");
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	ctx2.clearRect(0, 0, GBC.width, GBC.height);
	if (BG) {
		var FG = new Image();
		FG.src = "./YemeJe/Sinko peso calle full.png";
		FG.onload = function () {
			ctx2.drawImage(FG, -1196 + canvas.width, 0, 1196, H);
		}
	}
	var sinko = new Image();
	if (Ldom == "0") {
		sinko.src = "./YemeJe/Sinko peso full.png";
		canvas.setAttribute("width", W);
		GBC.setAttribute("width", W);
	} else {
		sinko.src = "./YemeJe/Sinko peso cuerpo.png";
	}
	sinko.onload = function () {
		ctx.drawImage(sinko, canvas.width - W, 0, W, H);
	}
	for (var i = 0; i < parseInt(Ldom); i++) {
		let CCC = new Image();
		CCC.src = "./YemeJe/Sinko peso kola.png";
		CCC.onload = function () {
			ctx.drawImage(CCC, 0, 0, W, H);
		}
		canvas.setAttribute("width", W + ((parseInt(Ldom)) * 80));
		GBC.setAttribute("width", W + ((parseInt(Ldom)) * 80));
		if (i == 0) {

		} else {
			cop((canvas.width - W) - (i * 80));
		}
		cop(0);
	}
	function cop (X2) {
		chef.CookElement("IMG", null, {"src": "./YemeJe/Sinko peso kuerpo.png"}).onload = function () {
			ctx.drawImage(chef.CookElement("IMG", null, {"src": "./YemeJe/Sinko peso kuerpo.png"}), X2, 0, W, H);
		}
	}
	if (TX) {
		ctx.font = FD[Ldom][1] + "px Arial";
		ctx.fillStyle = "white";
		ctx.textAlign = "center";
		ctx.fillText(FD[Ldom][0]+" peso", canvas.width / 2, canvas.height - 20);
	}
}

function menuOF (key, obj) {
	if (key) {
		var i = -10;
		var a = 0;
		var e = setInterval(function () {
			i += 2;
			a += 0.015;
			document.getElementById("real-menu-custom").setAttribute("style", "display: block;margin: "+i+"px 0px 0px 0px;filter: opacity("+a+")");
			if (i > 160)
				clearInterval(e);
		}, 4);
	} else {
		var i = 160;
		var a = 1;
		var e = setInterval(function () {
			i -= 2;
			a -= 0.01;
			document.getElementById("real-menu-custom").setAttribute("style", "display: block;margin: "+i+"px 0px 0px 0px;filter: opacity("+a+")");
			if (i < -10) {
				document.getElementById("real-menu-custom").setAttribute("style", "display: block;margin: -10px 0px 0px 0px;filter: opacity(0)");
				clearInterval(e);
			}
		}, 4);
	}
	obj.setAttribute("onclick", "menuOF("+!key+", this)")
}

function BGC (obj) {
	BG = !BG;
	if (BG) {
		obj.setAttribute("style", "background-color: var(--C1)");
	} else {
		obj.setAttribute("style", "background-color: var(--C5)");
	}
	menu();
}

function TC (obj) {
	TX = !TX;
	if (TX) {
		obj.setAttribute("style", "background-color: var(--C1)");
	} else {
		obj.setAttribute("style", "background-color: var(--C5)");
	}
	menu();
}
