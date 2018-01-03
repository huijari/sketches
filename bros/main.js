const p = (x, y, c) => ({ x, y, c })
const delta = x => random(-x, x)
const displace = by => a =>
  p(cap(width)(a.x + delta(by)), cap(height)(a.y + delta(by)))
const cap = threshold => x => min(max(x, 0), threshold)

let points = []

function setup() {
  createCanvas(windowWidth, windowHeight)
  background('#222222')
  fill('#2222220a')
  strokeWeight(3)
  points.push(p(width / 2, height / 2, palette()))
}

function draw() {
  darker()
  points.forEach(point => {
    const target = displace(10)(point)
    stroke(point.c)
    line(point.x, point.y, target.x, target.y)
    point.x = target.x
    point.y = target.y

    if (random() > 0.999) points.push(p(point.x, point.y, palette()))
  })
}

function darker() {
  noStroke()
  rect(0, 0, width, height)
}

function palette() {
  return random(['#58dcfd', '#f83e9e', '#19efa1', '#e0dee4'])
}
