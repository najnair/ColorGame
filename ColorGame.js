var numSquares = 6;
var colors = generateRandomColors(6);

var pickedColor = pickColor();
var colorDisplay = document.querySelector("#colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");

easyBtn.addEventListener("click", function(){
	hardBtn.classList.remove("selected");
	easyBtn.classList.add("selected");
	numSquares = 3;
	h1.style.backgroundColor = "steelblue";
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for(var i = 0; i<squares.length; i++){
		if(colors[i]){
			squares[i].style.backgroundColor = colors[i];
		} else {
			squares[i].style.display = "none";
		}

	}

});

hardBtn.addEventListener("click", function(){
	easyBtn.classList.remove("selected");
	hardBtn.classList.add("selected");
	numSquares = 6;
	h1.style.backgroundColor = "steelblue";
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for(var i = 0; i<squares.length; i++){
		
		squares[i].style.backgroundColor = colors[i];
		squares[i].style.display = "block";

	}
});


resetButton.addEventListener("click", function(){
	//generate random colors
	colors = generateRandomColors(numSquares);
	//pick a random color
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	h1.style.backgroundColor = "steelblue";
	messageDisplay.textContent = "";
	this.textContent = "New Colors";


	//change colors of squares
	for(var i = 0; i<squares.length; i++){
	squares[i].style.backgroundColor = colors[i];
	}
	
});

colorDisplay.textContent = pickedColor;


var squares = document.querySelectorAll(".square");
for(var i = 0; i<squares.length; i++){
	squares[i].style.backgroundColor = colors[i];

	squares[i].addEventListener("click", function(){

		clickedColor = this.style.backgroundColor;
		if (clickedColor === pickedColor){
			colorAll(pickedColor);
			messageDisplay.textContent = "Correct!!";
			h1.style.backgroundColor = clickedColor;
			resetButton.textContent = "Play Again?";
				}
		else {
			this.style.backgroundColor = "#232323";
			messageDisplay.textContent = "Try Again";
		}
	})

}

function colorAll(color){

	for(var i=0; i<squares.length; i++){
		squares[i].style.backgroundColor = color;
	}
}

function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];

}

function generateRandomColors(num){

	var arr = []
	for(var i =0; i< num; i++){
		var red = Math.floor(Math.random() * 255 +1);
		var green = Math.floor(Math.random() * 255 +1);
		var blue = Math.floor(Math.random() * 255 +1);	
		var colorstring = "rgb("+ red+ ", "+green+ ", "+blue +")";
		arr.push(colorstring);
	}
	


	return arr;
}