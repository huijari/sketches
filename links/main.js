const fg = '#2c2d2e'
const bg = '#e5f5a5'
const chance = 0.4
const circleRadius = [8, 48]
const margin = 64

const Point = (x, y) => [x, y]
const randomWithMargin = max => margin + random(max - margin * 2)
const randomPoint = () =>
  Point(randomWithMargin(width), randomWithMargin(height))

let generator

function setup() {
  createCanvas(innerWidth, innerHeight)
  background(bg)
  fill(fg)
  stroke(fg)
  strokeWeight(2)
  frameRate(2)

  generator = links()
}

function draw() {
  const { value, done } = generator.next()
  if (done) generator = links()
}

function* links() {
  let place = randomPoint()
  circleAt(place)
  while (random() > chance) {
    let newPlace = randomPoint()
    lineBetween(place, newPlace)
    circleAt(newPlace)
    place = newPlace
    yield
  }
}

function lineBetween(from, to) {
  line(from[0], from[1], to[0], to[1])
}
function circleAt(place) {
  const radius = random(circleRadius[0], circleRadius[1])
  if (random([false, true])) fill(fg)
  else noFill()
  ellipse(place[0], place[1], radius, radius)
}
