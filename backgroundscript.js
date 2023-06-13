var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var button = document.getElementById("applyRandom");
var randomColor1= document.querySelector(".color1");
var randomColor2= document.querySelector(".color2");

var letters = "0123456789ABCDEF";
var color = "#";

function setGradient() {
  body.style.background =
	"linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
  css.textContent = body.style.background + ";";
}


// find random color
function logRandomColors() {
	var randomColor1 = getRandomColor();
	var randomColor2 = getRandomColor();
  
	console.log("randomColor1:", randomColor1);
	console.log("randomColor2:", randomColor2);
  }
  
  function getRandomColor() {
	var letters = "0123456789ABCDEF";
	var color = "#";
	
	for (var i = 0; i < 6; i++) {
	  color += letters[Math.floor(Math.random() * 16)];
	}
	
	return color;
  }  

function setRandomGradient () {
	body.style.background =
	"linear-gradient(to right, " + getRandomColor() + ", " + getRandomColor() + ")";
  css.textContent = body.style.background + ";";
}


color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
console.log(button)
button.addEventListener("click", function () {
	body.style.background =
	"linear-gradient(to right, " + getRandomColor() + ", " + getRandomColor() + ")";
  css.textContent = body.style.background + ";";}
)
