let gen
let angle
function setup() {
  createCanvas(innerWidth, innerHeight)

  background('#FFF6B7')
  stroke('white')
  strokeWeight(2)

  ellipseMode(RADIUS)

  angle = 0
  gen = circles(angle)
}

function draw() {
  const res = gen.next()
  if (res.done) {
    angle += 0.05
    gen = circles(angle)
  }
}

function* circles(initialAngle) {
  let center = [innerWidth / 2, innerHeight / 2]
  let radius = 100
  let angle = initialAngle

  fill('#F6416C')
  stroke('#444')
  ellipse(center[0], center[1], radius, radius)
  yield

  fill('#FFF6B7')
  fill('#fff')
  stroke('#444')
  for (let i = 0; i < 15; i++) {
    const length = 1.666 * radius
    radius /= 1.5
    angle += 0.33 * PI
    center = [center[0] + length * cos(angle), center[1] + length * sin(angle)]
    ellipse(center[0], center[1], radius, radius)
    yield
  }
}
