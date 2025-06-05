const { fakeApi } = require('../index');

test('Simula chamada API', async () => {
  const res = await fakeApi();
  expect(res.status).toBe(200);
  expect(res.data).toBe("ok");
});
