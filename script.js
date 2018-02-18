// declare and initialize global variables
var canvas;
var clearButton;


function setup(){
  canvas= createCanvas(500,400);
  canvas.parent("#canvas-area");
  canvas.mousePressed(drawEllipse);
  clearButton = select("#clear-button");
  clearButton.mousePressed(clearScreen);
  background(65,60,68);
}


function drawEllipse(){
  fill("#f000f0");
  noStroke();
  ellipse(mouseX,mouseY,25,25);
}

function clearScreen(){
  background(65,60,68);
}
/*
 * setup()
 */


/*
 * drawEllipse()
 */


/*
 * updateSpread()
 * This function simply sets the spread variable to the value of the slider.
 * For example, if the slider is at 75, the spread will be set to 75 as well.
 */


 /*
  * drawSplatter()
  * Creates ellipses on the canvas around where the mouse is clicked.
  * Details:
  * -The function creates between 10 and 14 ellipses (random).
  * -Each ellipse will be a random color and have no outline.
  * -Each ellipse will have a random radius (5 to 14 pixels).
  * -Each ellipse's x and y values are calculated like this:
  *  x = random value between mouseX - spread and mouseX + spread
  *  y = random value between mouseY - spread and mouseY + spread
  */
