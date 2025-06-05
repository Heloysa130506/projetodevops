function sum(a, b) {
  return a + b;
}

function toUpper(str) {
  return str.toUpperCase();
}

function fakeApi() {
  return Promise.resolve({ status: 200, data: "ok" });
}

module.exports = { sum, toUpper, fakeApi };
