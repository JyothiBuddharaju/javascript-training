/**
 * Challenges on the if else statement
 * To run tests type:
 * npm run test:watch
 * then press p for pattern search
 * and enter 'if-else'
 * This should run only the if-else tests
 */

/**
 * #### 1 ####
 * 
 * Write a function to determine the day of the week
 * given the day number (Sunday is 1) 
 * If the number is not in the range 1-7 then 
 * return a string 'Invalid Number'
 * 
 * NOTE: call the function daysOfTheWeek
 */

export const daysOfTheWeek = (dayNumber) => {
  switch (dayNumber) {
    case 1:
      return 'Sunday'
    case 2:
      return 'Monday'
    case 3:
      return 'Tuesday'
    case 4:
      return 'Wednesday'
    case 5:
      return 'Thursday'
    case 6:
      return 'Friday'
    case 7:
      return 'Saturday'
    default:
      return 'Invalid Number'
  }
}
export default daysOfTheWeek;