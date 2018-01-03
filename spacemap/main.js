const bg = '#0c0d0e'
const fg = '#fffff5'
const lines = 8
const circles = 8
const iterations = [8, 16]
const gridSize = 16

function setup() {
  createCanvas(innerWidth, innerHeight)
  stroke(fg)
  frameRate(1)
}

function draw() {
  background(bg)
  render(random(iterations[0], iterations[1]))
  scale(width, height)
}

function render(num) {
  for (let i = 0; i < num; i++) {
    strokeWeight(random([1, 2, 4]))
    if (random() > 0.8) fill(fg)
    else noFill()

    if (random() > 0.7) renderLine()
    else renderCircle()
  }
}

function renderLine() {
  const from = randomPoint()
  const to = randomPoint()
  if (random() > 0.8) {
    const dirx = random([1, -1])
    const diry = random([1, -1])
    for (let i = 0; i < ceil(random(lines)); i++) {
      const delta = i * 8
      line(
        from[0] + delta * dirx,
        from[1] + delta * diry,
        to[0] + delta * dirx,
        to[1] + delta * diry
      )
    }
  } else line(from[0], from[1], to[0], to[1])
}

function renderCircle() {
  const center = randomPoint()
  const radius = random(random(128))
  if (random() > 0.8)
    for (let i = 0; i < ceil(random(circles)); i++) {
      const delta = i * 16
      ellipse(center[0], center[1], radius + delta, radius + delta)
    }
  else ellipse(center[0], center[1], radius, radius)
}

function randomPoint() {
  const base = gridSize
  return [width * randomGrid(base), height * randomGrid(base)]
}

function randomGrid(base) {
  return random(grid(base)) / (base - 1)
}
function grid(base) {
  return new Array(base).fill(0).map((_, k) => k)
}
