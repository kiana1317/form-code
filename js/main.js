// *********
// This is version 1 of the project. 
// Version 2 can be found under the branch Version2.
// *********
let d = 100
let total = 100
let xs = Array(100).fill(innerWidth / 2)
let ys = Array(100).fill(innerHeight / 2)
let dxs = []
let dys = []
let rec = true
let trans = 70
let change = 5
let pressed = false
let r = 0
let i = 0
let j = 0

// Setup appears at page load
function setup() {
  createCanvas(innerWidth, innerHeight)
  background(0,128,128, trans) // Last color is transparency
  dxs = Array.from({length: 100}, () => random(-2,2));
  dys = Array.from({length: 100}, () => random(-2,2));
}

function keyPressed() {
  if (keyCode === 32) {
    if (pressed) {loop()} else (noLoop())
    pressed = !pressed
  }
  if (keyCode === UP_ARROW && trans< 200){
    trans += change
  }
  if (keyCode === DOWN_ARROW && trans > 0){
    trans -= change
  }
  if (key === "r"){
    rec = true
    xs = Array(100).fill(mouseX)
    ys = Array(100).fill(mouseY)
  }

  if (key === "e"){
    rec = false
    xs = Array(100).fill(mouseX)
    ys = Array(100).fill(mouseY)
  }
}

function drawOverlaps(x,y){
  stroke(random(0,255))
  noFill()
  for(j = 0; j < total; j++){
    let distance = dist(x,y, xs[j], ys[j])
    if (distance < d) {
      if (rec) {rect(x,y, xs[j], ys[j])} else ellipse(x,y, xs[j], ys[j])
    }
  }
}
function mousePressed(){
  xs = Array(100).fill(mouseX)
  ys = Array(100).fill(mouseY)
}

function draw() {
  let gb = random(128,255)
  background(50,gb - 20,gb, trans)
  for(i = 0; i < total; i++){
    xs[i] += dxs[i]
    ys[i] += dys[i]
    if (ys[i] > height || ys[i] < 0) dys[i] = -dys[i]
    if (xs[i] > width || xs[i] < 0) dxs[i] = -dxs[i]
    drawOverlaps(xs[i], ys[i])
  }
}
