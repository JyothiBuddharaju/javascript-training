/**
 * ADD TESTS HERE
 */
import helloWorld from './hello.index'
test('should return a \'Hello ,World!\'', () => {
  const excepted = 'Hello, World!';
  const actual = helloWorld();
  expect(actual).toEqual(excepted);

})