const sizedRandom = (start, size) => () => random(start, start + size)

function setup() {
  createCanvas(windowWidth, windowHeight)
  background('#fff5c3')

  const padding = 8
  const size = [16, 24]
  const rows = height > width ? size[1] : size[0]
  const rowSize = (height - padding) / rows
  const cols = width > height ? size[1] : size[0]
  const colSize = (width - padding) / cols

  stroke('#9452a5')
  strokeWeight(2)
  noFill()

  for (let x = 0; x < cols; x++)
    for (let y = 0; y < rows; y++) {
      const gen = sizedRandom(x * colSize + padding, colSize - padding)
      const top = y * rowSize + padding
      const bot = (y + 1) * rowSize - padding
      quad(gen(), top, gen(), top, gen(), bot, gen(), bot)
    }
}
