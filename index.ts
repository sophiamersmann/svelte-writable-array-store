import { writable } from 'svelte/store';

export function writableArray<T>(
  value: T[],
  start?: (set: (value: T[]) => void) => () => void
) {
  const { subscribe, set, update } = writable(value, start);

  /**
   * adds one or more elements to the end of an array
   */
  function push(...items: T[]) {
    update(($array) => [...$array, ...items]);
  }

  /**
   * removes the last element from an array
   */
  function pop() {
    update(($array) => $array.slice(0, $array.length - 1));
  }

  /**
   * removes the first element from an array
   */
  function shift() {
    update(($array) => $array.slice(1));
  }

  /**
   * adds one or more elements to the beginning of an array
   */
  function unshift(...items: T[]) {
    update(($array) => [...items, ...$array]);
  }

  /**
   * changes the contents of an array by removing or
   * replacing existing elements and/or adding new elements
   */
  function splice(start: number, deleteCount?: number): void;
  function splice(start: number, deleteCount: number, ...items: T[]): void;
  function splice(start: number, deleteCount?: number, ...items: T[]) {
    update(($array) => {
      const copy = [...$array];
      if (deleteCount === undefined) {
        copy.splice(start);
      } else {
        copy.splice(start, deleteCount, ...items);
      }
      return copy;
    });
  }

  /**
   * sorts the elements of an array
   */
  function sort(compareFn?: (firstEl: T, secondEl: T) => number) {
    update(($array) => {
      const copy = [...$array];
      copy.sort(compareFn);
      return copy;
    });
  }

  /**
   * reverses an array
   */
  function reverse() {
    update(($array) => {
      const copy = [...$array];
      copy.reverse();
      return copy;
    });
  }

  /**
   * shallow copies part of an array to another location in the same array
   */
  function copyWithin(target: number, start: number, end?: number) {
    update(($array) => {
      const copy = [...$array];
      copy.copyWithin(target, start, end);
      return copy;
    });
  }

  return {
    subscribe,
    set,
    update,
    push,
    pop,
    shift,
    unshift,
    splice,
    sort,
    reverse,
    copyWithin,
  };
}
