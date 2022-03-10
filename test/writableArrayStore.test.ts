import { writableArray } from '../index';
import { get } from 'svelte/store';

describe('writable()', () => {
  test('uses initial value', () => {
    const store = writableArray([0, 1, 2]);
    const value = get(store);

    expect(value).toEqual([0, 1, 2]);
  });

  test('push()', () => {
    const array = [0, 1, 2];
    const store = writableArray([...array]);

    array.push(3);
    store.push(3);
    expect(get(store)).toEqual(array);

    array.push(4, 5, 6);
    store.push(4, 5, 6);
    expect(get(store)).toEqual(array);
  });

  test('pop()', () => {
    const array = [0, 1, 2];
    const store = writableArray([...array]);

    array.pop();
    store.pop();
    expect(get(store)).toEqual(array);
  });

  test('shift()', () => {
    const array = [0, 1, 2];
    const store = writableArray([...array]);

    array.shift();
    store.shift();
    expect(get(store)).toEqual(array);
  });

  test('unshift()', () => {
    const array = [0, 1, 2];
    const store = writableArray([...array]);

    array.unshift(-1);
    store.unshift(-1);
    expect(get(store)).toEqual(array);

    array.unshift(-4, -3, -2);
    store.unshift(-4, -3, -2);
    expect(get(store)).toEqual(array);
  });

  test('splice()', () => {
    const array = [0, 1, 2, 4, 5];
    const store = writableArray([...array]);

    array.splice(2);
    store.splice(2);
    expect(get(store)).toEqual(array);

    array.splice(1, 0, 10);
    store.splice(1, 0, 10);

    expect(get(store)).toEqual(array);
  });

  test('sort()', () => {
    const array = [1, 0, 2, 3, 8, 5];
    const store = writableArray([...array]);

    array.sort();
    store.sort();

    expect(get(store)).toEqual(array);
  });

  test('reverse()', () => {
    const array = [1, 0, 2, 3, 8, 5];
    const store = writableArray([...array]);

    array.reverse();
    store.reverse();

    expect(get(store)).toEqual(array);
  });

  test('copyWithin()', () => {
    const array = [0, 1, 2, 3, 4];
    const store = writableArray([...array]);

    array.copyWithin(1, 2);
    store.copyWithin(1, 2);
    expect(get(store)).toEqual(array);

    array.copyWithin(0, 3, 4);
    store.copyWithin(0, 3, 4);

    expect(get(store)).toEqual(array);
  });
});
