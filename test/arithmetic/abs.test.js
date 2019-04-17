import abs from '../../src/arithmetic/abs';

test('Should return absolute value of positive and negative integers', () => {
  expect(abs(-1)).toBe(1);
  expect(abs(2)).toBe(2);
  expect(abs(0)).toBe(0);
});
