import divide from '../../src/arithmetic/divide';

test('Should be able to divide two integers', () => {
  expect(divide(4, 2)).toBe(2);
});
