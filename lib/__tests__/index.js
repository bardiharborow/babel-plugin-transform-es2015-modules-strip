const babel = require('@babel/core');
const plugin = require('../index.js');

const options = {
  presets: [
    ['@babel/env', {
      modules: false
    }]
  ],
  plugins: [
    plugin
  ]
};

it('Module imports are stripped', () => {
  const example = `
    import path from 'path';
  `;

  const { code } = babel.transformSync(example, options);
  expect(code.length).toBe(0);
});

it('Module exports are stripped', () => {
  const example = `
    export default 42;
  `;

  const { code } = babel.transformSync(example, options);
  expect(code.length).toBe(0);
});

it('Other code is retained', () => {
  const example = `
    import path from 'path';

    console.log(path.sep);

    export default 42;
  `;

  const { code } = babel.transformSync(example, options);
  expect(code).toBe('console.log(path.sep);');
});
