import triangleType from './triangle.index';

test('should return an Equilateral Triangle', () => {
  const expected = 'Equilateral Triangle'
  const actual = triangleType(3, 3, 3)
  expect(actual).toEqual(expected)
})

test('should return an Isoscales Triangle', () => {
  const expected = 'Isoscales Triangle'
  const actual = triangleType(3, 3, 4)
  expect(actual).toEqual(expected)
})

test('should reaturn an Scalene Triangle', () => {
  const expected = 'Scalene Triangle'
  const actual = triangleType(2, 3, 4)
  expect(actual).toEqual(expected)
})
test('should reaturn an InValid Triangle', () => {
  const expected = 'Invalid Triangle'
  const actual = triangleType(2, 3, -1)
  expect(actual).toEqual(expected)
})