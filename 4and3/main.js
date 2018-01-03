function setup() {
  createCanvas(innerWidth, innerHeight)
  background('white')
  strokeWeight(2)

  for (let i = 0; i < 100; i++) render()
}
function render() {
  const c = randomColor()
  stroke(c)
  if (randomBool()) fill(c)
  else noFill()

  if (randomBool()) square()
  else tri()
}

function square() {
  const a = randomPoint()
  const size = random(16, 48)
  rect(a.x, a.y, size, size)
}
function tri() {
  const a = randomPoint()
  const d = random(32, 64)
  const dx = randomBool() ? d : -d
  const dy = randomBool() ? d : -d
  triangle(a.x, a.y, a.x + dx, a.y, a.x, a.y + dy)
}

function randomPoint() {
  return {
    x: random(width),
    y: random(height)
  }
}
function randomBool() {
  return random([true, false])
}
function randomColor() {
  return random(['#f95726', '#08c9f9', '#1e207d'])
}
