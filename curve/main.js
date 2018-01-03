const bg = '#fafff0'
const fg = '#4d4e4f'
const resolution = 32
const weight = 2
const margin = 32

function setup() {
  createCanvas(innerWidth, innerHeight)
  stroke(fg)
  strokeWeight(weight)
  strokeCap(PROJECT)
  frameRate(1)
}

function draw() {
  background(bg)
  lineCurve(randomPair(), randomPair())
}

function lineCurve(from, to) {
  const diff = [
    multi(distance(from[0], to[0]), 1 / resolution),
    multi(distance(from[1], to[1]), 1 / resolution)
  ]
  for (let i = 0; i < resolution; i++) {
    const delta = [multi(diff[0], i), multi(diff[1], i)]
    line(
      from[0][0] + delta[0][0],
      from[0][1] + delta[0][1],
      from[1][0] + delta[1][0],
      from[1][1] + delta[1][1]
    )
  }
}

function distance(a, b) {
  return [b[0] - a[0], b[1] - a[1]]
}
function randomWithMargin(max) {
  return margin + random(max - 2 * margin)
}
function randomPoint() {
  return [randomWithMargin(width), randomWithMargin(height)]
}
function randomPair() {
  return [randomPoint(), randomPoint()]
}
function multi(pair, value) {
  return pair.map(x => x * value)
}
