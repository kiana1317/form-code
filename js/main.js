// Setup appears at page load
function setup() {
  createCanvas(innerWidth, innerHeight)
  background(0,128,128, 100) // Last color is transparency
}

function mouseMoved () {
   let x = mouseX
   let y = height/2
   let d = mouseY

   //Change colors
   let gb = map(x, 0, width, 128, 255) // (value,minVal, maxVal, newMin, newMax)
   fill(50,gb - 20,gb)
   stroke(0)
   strokeWeight(10)
   // random(lowerlimit,upperlimit)
   ellipse(x, y, d) // (x, y, width, height)
}

// let x = width / 2
// let y = height / 2
// let d = width / 4
// //Code runs from top to bottom, so draw the object after giving it it's quality
// fill(3,128,128)
// stroke(50,128,128)
// strokeWeight(10)
// // random(lowerlimit,upperlimit)
// ellipse(x, y, d) // (x, y, width, height) or
