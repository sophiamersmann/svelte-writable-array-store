import { writable } from 'svelte/store';

export default function writableArray<T>(
  value: T,
  start?: (set: (value: T) => void) => () => void
) {
  return writable(value, start);
}
