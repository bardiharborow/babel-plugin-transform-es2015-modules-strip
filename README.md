# babel-plugin-transform-es2015-modules-strip

[![This project has a package hosted on the NPM repository.](https://img.shields.io/npm/v/babel-plugin-transform-es2015-modules-strip)](https://www.npmjs.com/package/babel-plugin-transform-es2015-modules-strip)
![](https://img.shields.io/npm/dw/babel-plugin-transform-es2015-modules-strip)
[![This project is licensed under the terms of the MIT license.](https://img.shields.io/npm/l/babel-plugin-transform-es2015-modules-strip)](https://github.com/bardiharborow/babel-plugin-transform-es2015-modules-strip/blob/master/LICENSE)

A Babel plugin that strips `import` and `export` statements from modules.

## Installation

```sh
npm install --save-dev babel-plugin-transform-es2015-modules-strip
```

## Example

The plugin takes this code:

```javascript
import path from 'path';

console.log(path.sep);

export default 42;
```

And returns this code:

```javascript
console.log(path.sep);
```

## Usage

### In the `babel.config.json` configuration file

```json
{
  "presets": [
    ["@babel/env", {
      "modules": false
    }]
  ],
  "plugins": ["transform-es2015-modules-strip"]
}
```

### With the Node API

```javascript
require("@babel/core").transformSync("code", {
  presets: [
    ["@babel/env", {
      "modules": false
    }]
  ],
  plugins: ["transform-es2015-modules-strip"]
});
```

## History

This plugin was used by [Bootstrap](https://github.com/twbs/bootstrap) between
v4.0.0-beta ([twbs/bootstrap#22045](https://github.com/twbs/bootstrap/pull/22045))
and v4.1.2 ([twbs/bootstrap#26767](https://github.com/twbs/bootstrap/pull/26767)).

## License

This project is licensed under the terms of [the MIT license](LICENSE).
