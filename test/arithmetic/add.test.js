import add from '../../src/arithmetic/add';

test('Two integers should get added up', () => {
  expect(add(2, 3)).toBe(5);
  expect(add(-1, 0)).toBe(-1);
});
