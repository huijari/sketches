const Html = require('html-webpack-plugin')

const sketches = [
  'curve',
  'division',
  'hashes',
  'links',
  'spacemap'
]

const entry = './index'

const output = {
  path: __dirname,
  filename: 'sketch/index.js'
}

const plugins = sketches.map(
  sketch =>
    new Html({
      sketch,
      inject: false,
      template: 'sketch.html',
      filename: `${sketch}/index.html`
    })
)

module.exports = {
  entry,
  output,
  plugins
}
