const Html = require('html-webpack-plugin')

const sketches = []

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
      template: 'sketch/template.html',
      filename: `sketch/${sketch}/index.html`
    })
)

module.exports = {
  entry,
  output,
  plugins
}
