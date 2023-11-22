<!----- BEGIN GHOST DOCS HEADER ----->

# tailwind-grid-auto

[![npm-version](https://img.shields.io/npm/v/@jill64/tailwind-grid-auto)](https://npmjs.com/package/@jill64/tailwind-grid-auto) [![npm-license](https://img.shields.io/npm/l/@jill64/tailwind-grid-auto)](https://npmjs.com/package/@jill64/tailwind-grid-auto) [![npm-download-month](https://img.shields.io/npm/dm/@jill64/tailwind-grid-auto)](https://npmjs.com/package/@jill64/tailwind-grid-auto) [![npm-min-size](https://img.shields.io/bundlephobia/min/@jill64/tailwind-grid-auto)](https://npmjs.com/package/@jill64/tailwind-grid-auto) [![ci.yml](https://github.com/jill64/tailwind-grid-auto/actions/workflows/ci.yml/badge.svg)](https://github.com/jill64/tailwind-grid-auto/actions/workflows/ci.yml) [![website](https://img.shields.io/website?up_message=working&down_message=down&url=https%3A%2F%2Ftailwind-grid-auto.jill64.dev)](https://tailwind-grid-auto.jill64.dev)

🌀 A Tailwind CSS plugin for auto adjusting grid

## [Demo](https://tailwind-grid-auto.jill64.dev)

## Installation

```sh
npm i @jill64/tailwind-grid-auto
```

<!----- END GHOST DOCS HEADER ----->

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
  <!–- ... -–>
</div>
```

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
        10: '10',
        11: '11',
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
