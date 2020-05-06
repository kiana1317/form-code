let d = 100
let total = 100
let xs = Array(100).fill(innerWidth / 2)
let ys = Array(100).fill(innerHeight / 2)
let dxs = []
let dys = []
let rec = false
let trans = 100
let change = 5
let pressed = false

// Setup appears at page load
function setup() {
  createCanvas(innerWidth, innerHeight)
  background(0,128,128, trans) // Last color is transparency
  dxs = Array.from({length: 100}, () => random(-2,2));
  dys = Array.from({length: 100}, () => random(-2,2));
}

function keyPressed() {
  if (keyCode === 32) {
    if (pressed) loop() else(noLoop())
    pressed = !pressed
  }
  if (keyCode === UP_ARROW){
    trans += change
  }
  if (keyCode === DOWN_ARROW){
    trans -= change
  }
}

function drawOverlaps(x,y){
  stroke(random(100,255))
  noFill()
  for(let i = 0; i < total; i++){
    let distance = dist(x,y, xs[i], ys[i])
    if (distance < d) {
      if (rec) {rect(x,y, xs[i], ys[i])} else ellipse(x,y, xs[i], ys[i])
    }
  }
}
function mousePressed(){
  xs = Array(100).fill(mouseX)
  ys = Array(100).fill(mouseY)
  rec = !rec
}

function draw() {
  background(0,128,128, trans)
  for(let i = 0; i < total; i++){
    xs[i] += dxs[i]
    ys[i] += dys[i]
    if (ys[i] > height || ys[i] < 0) dys[i] = -dys[i]
    if (xs[i] > width || xs[i] < 0) dxs[i] = -dxs[i]
    drawOverlaps(xs[i], ys[i])
  }
}
