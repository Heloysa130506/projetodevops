const { toUpper } = require('../index');

test('Transforma em maiúscula', () => {
  expect(toUpper("hello")).toBe("HELLO");
});
