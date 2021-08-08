// jest文档：https://jestjs.io/zh-Hans/docs/getting-started
// create-react-app#tests：http://59.110.235.189/create-react-app/docs/running-tests
function add(a, b) {
  return a + b
}

test('add fun test', () => {
  expect(add(1, 2)).toBe(3);
  expect(add(2, 2)).toEqual(4);
});
