const { sum } = require('../index');

test('Soma correta', () => {
  expect(sum(2, 3)).toBe(5);
});
