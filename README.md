# svelte-writable-array-store

Writable array store in Svelte.

Adds [Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) methods to a Svelte store, including: [`push`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push), [`pop`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/pop), [`shift`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/shift), [`unshift`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/unshift), [`splice`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice), [`sort`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort), [`reverse`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse) and [`copyWithin`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/copyWithin).

## Install

```bash
npm install svelte-writable-array-store
```

## Usage

Create a store:

```js
import { writableArray } from 'svelte-writable-array-store';

export const arrayStore = writableArray([1, 2, 3, 4, 5]);
```

Use it:

```js
import { arrayStore } from './whereever';

// exposes all built-in store functions
arrayStore.subscribe(...)
arrayStore.set(...)
arrayStore.update(...)
$arrayStore

// offers additional array methods
arrayStore.push(6, 7, 8) // add elements to the end
arrayStore.pop() // remove last element
arrayStore.shift() // remove first element
arrayStore.unshift(0) // add elements to the beginning
arrayStore.splice(2) // changes the contents of an array
arrayStore.sort() // sort elements
arrayStore.reverse() // reverse elements
arrayStore.copyWithin(1, 2) // shallow copies part of an array to another location in the same array
```

## License

MIT
