const delta = 0.5
const maxSize = 32
const padding = 64
const displace = square => {
  const progress = square.size / maxSize
  let by = delta * (1 - 2 ** progress)
  by = by < delta / 3 ? delta / 3 : by
  square.size += square.grow ? by : -by
  if (square.size > maxSize) {
    square.size = maxSize
    square.grow = false
  }
  if (square.size < 1) {
    square.size = 1
    square.grow = true
  }
}

const square = (size, color, grow, hollow) => ({ size, color, grow, hollow })
const generateSquares = (columns, rows) =>
  new Array(columns)
    .fill(0)
    .map(() =>
      new Array(rows)
        .fill(0)
        .map(() =>
          square(
            random(maxSize),
            palette(),
            random([true, false]),
            random([true, false])
          )
        )
    )
let squares

const bg = '#dfeaef'
const palette = () => random(['#33197f', '#332446', '#465f52'])

function setup() {
  createCanvas(windowWidth, windowHeight)
  noStroke()
  rectMode(RADIUS)

  squares = generateSquares(
    ceil((width - 2 * padding) / (maxSize * 2)),
    ceil((height - 2 * padding) / (maxSize * 2))
  )
}

function draw() {
  background(bg)
  squares.forEach((column, x) =>
    column.forEach((square, y) => {
      displace(square)
      fill(square.color)
      rect(
        padding + x / (squares.length - 1) * (width - 2 * padding),
        padding + y / (column.length - 1) * (height - 2 * padding),
        square.size,
        square.size
      )
      if (square.hollow) {
        fill(bg)
        rect(
          padding + x / (squares.length - 1) * (width - 2 * padding),
          padding + y / (column.length - 1) * (height - 2 * padding),
          square.size / 2,
          square.size / 2
        )
      }
    })
  )
}
