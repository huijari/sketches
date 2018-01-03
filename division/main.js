const point = (x, y) => ({ x, y })
const colorFromPalette = () =>
  random(['#b6d7e9', '#58969c', '#332b49', '#422748'])

const padding = 12
const queue = []

function setup() {
  createCanvas(windowWidth, windowHeight)
  queue.push(() => renderRect(point(0, 0), point(width, height)))
}

function draw() {
  if (queue.length) queue.shift()()
}

function renderRect(start, end) {
  if (random([true, false, false])) fill(colorFromPalette())
  rect(start.x, start.y, end.x - start.x, end.y - start.y)
  queue.push(
    random([
      () => {
        if (end.x - start.x > padding * 2 && end.y - start.y > padding * 2)
          renderRect(
            point(start.x + padding, start.y + padding),
            point(end.x - padding, end.y - padding)
          )
      },
      () => {
        renderRect(point((start.x + end.x) / 2, start.y), end)
        renderRect(start, point((start.x + end.x) / 2, end.y))
      },
      () => {
        renderRect(start, point(end.x, (start.y + end.y) / 2))
        renderRect(point(start.x, (start.y + end.y) / 2), end)
      }
    ])
  )
}
