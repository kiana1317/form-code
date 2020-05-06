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

// Setup appears at page load
function setup() {
  createCanvas(innerWidth, innerHeight)
  background(0,128,128, 100) // Last color is transparency
  dxs = Array.from({length: 100}, () => random(-2,2));
  dys = Array.from({length: 100}, () => random(-2,2));
}

function drawOverlaps(x,y){
  stroke(random(100,255))
  for(let i = 0; i < total; i++){
    let distance = dist(x,y, xs[i], ys[i])
    if (distance > d) line(x,y, xs[i], ys[i])
  }
}

function draw() {
  background(0,128,128, 10)
  for(let i = 0; i < total; i++){
    xs[i] += dxs[i]
    ys[i] += dys[i]
    if (ys[i] > height || ys[i] < 0) dys[i] = -dys[i]
    if (xs[i] > width || xs[i] < 0) dxs[i] = -dxs[i]
    drawOverlaps(xs[i], ys[i])
  }
}
