const babel = require('@babel/core')
const plugin = require('../index.js')

const options = {
  presets: [
    ["@babel/env", {
      "modules": false
    }]
  ],
  plugins: [
    plugin
  ]
}

it('Module imports are stripped', () => {
  var example = `
    import fs from 'fs'
    import path from 'path'
  `

  const {code} = babel.transform(example, options)
  expect(code.length).toBe(0)
})
