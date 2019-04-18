import { max } from '../../src';

test('Should give max entry from a given array', () => {
  expect(max([1, 3, 4])).toBe(4);
  expect(max([1, 10, 10])).toBe(10);
  expect(max([-1, -5, 0])).toBe(0);
});
