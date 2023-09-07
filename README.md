# tailwind-grid-auto

[![npm version](https://badge.fury.io/js/@jill64%2Ftailwind-grid-auto.svg)](https://badge.fury.io/js/@jill64%2Ftailwind-grid-auto)

A Tailwind CSS plugin for automatically adjusting the size of grid track based on a specified number.

## Install

```sh
npm i @jill64/tailwind-grid-auto
```

```js
// tailwind.config.js
module.exports = {
  theme: {
    // ...
  },
  plugins: [
    require('@jill64/tailwind-grid-auto')
    // ...
  ]
}
```

## Usage

```html
<div class="inline-grid auto-cols-2">
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
| `auto-cols-1` | `grid-template-columns: repeat(1, auto)` |
| `auto-cols-2` | `grid-template-columns: repeat(2, auto)` |
| `auto-cols-3` | `grid-template-columns: repeat(3, auto)` |
| `auto-cols-4` | `grid-template-columns: repeat(4, auto)` |
| `auto-cols-5` | `grid-template-columns: repeat(5, auto)` |
| `auto-cols-6` | `grid-template-columns: repeat(6, auto)` |
| `auto-cols-7` | `grid-template-columns: repeat(7, auto)` |
| `auto-cols-8` | `grid-template-columns: repeat(8, auto)` |
| `auto-cols-9` | `grid-template-columns: repeat(9, auto)` |
| `auto-rows-1` | `grid-template-rows: repeat(1, auto)`    |
| `auto-rows-2` | `grid-template-rows: repeat(2, auto)`    |
| `auto-rows-3` | `grid-template-rows: repeat(3, auto)`    |
| `auto-rows-4` | `grid-template-rows: repeat(4, auto)`    |
| `auto-rows-5` | `grid-template-rows: repeat(5, auto)`    |
| `auto-rows-6` | `grid-template-rows: repeat(6, auto)`    |
| `auto-rows-7` | `grid-template-rows: repeat(7, auto)`    |
| `auto-rows-8` | `grid-template-rows: repeat(8, auto)`    |
| `auto-rows-9` | `grid-template-rows: repeat(9, auto)`    |

You can configure which values are available for this plugin under the `gridAuto` key in your `tailwind.config.js` file:

```js
// tailwind.config.js
module.exports = {
	theme: {
		extend: {
			gridAuto: {
				10: '10'
				11: '11'
				12: '12'
			}
		}
	}
}
```

Alternatively, you can use square bracket notation.

| Name            | CSS                                      |
| --------------- | ---------------------------------------- |
| `auto-cols-[n]` | `grid-template-columns: repeat(n, auto)` |
| `auto-rows-[n]` | `grid-template-rows: repeat(n, auto)`    |
