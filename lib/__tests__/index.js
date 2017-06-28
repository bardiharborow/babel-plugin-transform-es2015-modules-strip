const babel = require('babel-core')
const plugin = require('../index.js')
const options = {
  presets: [
    ["es2015", {
      "modules": false
    }]
  ],
  plugins: [plugin]
}

it('Imports stripped', () => {
  var example = `
    import fs from 'fs'
    import path from 'path'
  `

  const {code} = babel.transform(example, options)
  expect(code.length).toBe(0)
})