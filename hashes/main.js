const Point = (x, y) => [x, y]
const Line = (from, to) => [from, to]

const fg = '#2c2d2e'
const bg = '#e5f5a5'
const grid = 8
const distance = 8
const interval = [4, 16]
const margin = distance * interval[1]

const randomInGrid = () => floor(random(grid)) / (grid - 1)
const randomWithMargin = max => margin + randomInGrid() * (max - margin * 2)
const randomPoint = () =>
  Point(randomWithMargin(width), randomWithMargin(height))
const randomLine = () => Line(randomPoint(), randomPoint())
const randomDir = () => random([1, -1])
const randomInterval = () => random(interval[0], interval[1])

let generator

function setup() {
  createCanvas(innerWidth, innerHeight)
  background(bg)
  stroke(fg)
  strokeWeight(2)
  // noLoop()
  frameRate(10)

  generator = hash()
}

function draw() {
  // background(bg)
  const { value, done } = generator.next()
  if (done) generator = hash()
  else line(value[0][0], value[0][1], value[1][0], value[1][1])
}

function* hash() {
  const iterations = randomInterval()
  const line = randomLine()
  const dir = new Array(2).fill(0).map(randomDir)

  for (let i = 1; i < iterations; i++) {
    yield [
      [
        [line[0][0] + i * distance * dir[0]],
        [line[0][1] + i * distance * dir[1]]
      ],
      [
        [line[1][0] + i * distance * dir[0]],
        [line[1][1] + i * distance * dir[1]]
      ]
    ]
  }
}
