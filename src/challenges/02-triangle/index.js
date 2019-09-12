const isValid = (a, b, c) => {
  return (a > 0 && b > 0 && c > 0 && ((a + b >= c) && (b + c >= a) && (c + a >= b)))
}
const isEquilateral = (a, b, c) => {
  return (a === b && b === c && c === a)
}
const isIsoscales = (a, b, c) => {
  return (a === b && b === a && c !== a)
}
const isScalene = (a, b, c) => {
  return (a !== b && c !== b)
}

const triangleType = (a, b, c) => {
  if (isValid(a, b, c)) {
    if (isEquilateral(a, b, c)) {
      return 'Equilateral Triangle'
    }
    if (isIsoscales(a, b, c)) {
      return 'Isoscales Triangle'
    } else {
      return 'Scalene Triangle'
    }
  }

  return 'Invalid Triangle'

}

export default triangleType