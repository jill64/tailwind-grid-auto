# tailwind-grid-auto

[![npm](https://img.shields.io/npm/v/%40jill64%2Ftailwind-grid-auto)](https://npmjs.com/package/@jill64/tailwind-grid-auto)
[![npm](https://img.shields.io/npm/l/%40jill64%2Ftailwind-grid-auto)](https://npmjs.com/package/@jill64/tailwind-grid-auto)
[![Deploy](https://github.com/jill64/tailwind-grid-auto/actions/workflows/deploy.yml/badge.svg)](https://github.com/jill64/tailwind-grid-auto/actions/workflows/deploy.yml)

A Tailwind CSS plugin for automatically adjusting the size of grid track.

[Demo](https://jill64.github.io/tailwind-grid-auto)

## Installation

```sh
npm i @jill64/tailwind-grid-auto
```

```js:tailwind.config.js
// tailwind.config.js
import gridAuto from '@jill64/tailwind-grid-auto'

const config = {
  // ...
  plugins: [
    gridAuto
    // ...
  ]
}

export default config
```

## Usage

```html
<div class="inline-grid cols-auto-2">
  <div>--Short--</div>
  <div>--Short--</div>
  <div>----Medium----</div>
  <div>------Long------</div>
  <div>------Long------</div>
  <div>--------ExLong--------</div>
</div>
```

Show as

|                    |                          |
| ------------------ | ------------------------ |
| `--Short--`        | `--Short--`              |
| `----Medium----`   | `------Long------`       |
| `------Long------` | `--------ExLong--------` |

## Configuration

| Name          | CSS                                      |
| ------------- | ---------------------------------------- |
| `cols-auto-1` | `grid-template-columns: repeat(1, auto)` |
| `cols-auto-2` | `grid-template-columns: repeat(2, auto)` |
| `cols-auto-3` | `grid-template-columns: repeat(3, auto)` |
| `cols-auto-4` | `grid-template-columns: repeat(4, auto)` |
| `cols-auto-5` | `grid-template-columns: repeat(5, auto)` |
| `cols-auto-6` | `grid-template-columns: repeat(6, auto)` |
| `cols-auto-7` | `grid-template-columns: repeat(7, auto)` |
| `cols-auto-8` | `grid-template-columns: repeat(8, auto)` |
| `cols-auto-9` | `grid-template-columns: repeat(9, auto)` |
| `rows-auto-1` | `grid-template-rows: repeat(1, auto)`    |
| `rows-auto-2` | `grid-template-rows: repeat(2, auto)`    |
| `rows-auto-3` | `grid-template-rows: repeat(3, auto)`    |
| `rows-auto-4` | `grid-template-rows: repeat(4, auto)`    |
| `rows-auto-5` | `grid-template-rows: repeat(5, auto)`    |
| `rows-auto-6` | `grid-template-rows: repeat(6, auto)`    |
| `rows-auto-7` | `grid-template-rows: repeat(7, auto)`    |
| `rows-auto-8` | `grid-template-rows: repeat(8, auto)`    |
| `rows-auto-9` | `grid-template-rows: repeat(9, auto)`    |

You can configure which values are available for this plugin under the `gridAuto` key in your `tailwind.config.js` file:

```js:tailwind.config.js
// tailwind.config.js
import gridAuto from '@jill64/tailwind-grid-auto'

const config = {
  theme: {
    extend: {
      gridAuto: {
        10: '10'
        11: '11'
	12: '12'
      }
    }
  }
  // ...
}

export default config
```

Alternatively, you can use square bracket notation.

| Name            | CSS                                      |
| --------------- | ---------------------------------------- |
| `cols-auto-[n]` | `grid-template-columns: repeat(n, auto)` |
| `rows-auto-[n]` | `grid-template-rows: repeat(n, auto)`    |
