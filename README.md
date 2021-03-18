# babel-plugin-transform-es2015-modules-strip

[![This project has a package hosted on the NPM repository.](https://img.shields.io/npm/v/babel-plugin-transform-es2015-modules-strip)](https://www.npmjs.com/package/babel-plugin-transform-es2015-modules-strip)
![](https://img.shields.io/npm/dw/babel-plugin-transform-es2015-modules-strip)
[![This project is licensed under the terms of the MIT license.](https://img.shields.io/npm/l/babel-plugin-transform-es2015-modules-strip)](https://github.com/bardiharborow/babel-plugin-transform-es2015-modules-strip/blob/master/LICENSE)

This is a Babel plugin which strips import and export statements from modules.

## Example

**In**

```javascript
import path from 'path';

console.log(path.sep);

export default 42;
```

**Out**

```javascript
console.log(path.sep);
```

## Installation

```sh
npm install --save-dev babel-plugin-transform-es2015-modules-strip
```

## Usage

### With a configuration file (Recommended)

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

### Via Node API

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

## License

This project is licensed under the terms of [the MIT license](LICENSE).
