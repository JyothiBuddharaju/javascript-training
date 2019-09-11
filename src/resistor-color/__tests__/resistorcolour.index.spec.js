import colourCode from './resistorcolour.index';

test('should return 0 for black', () => {
  const expected = 0
  const result = colourCode('black')
  expect(result).toEqual(expected)
})

test('should return 5 for green', () => {
  const expected = 5
  const result = colourCode('green')
  expect(result).toEqual(expected)
})

test('should return Invalid Colour', () => {
  const expected = 'Invalid colour'
  const result = colourCode('hai')
  expect(result).toEqual(expected)
})