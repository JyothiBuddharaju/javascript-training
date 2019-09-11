/**
 * Challenges on the forEach method of Array
 * To run tests type:
 * npm run test:watch
 * then press p for pattern search
 * and enter 'forEach'
 * This should run only the forEach tests
 */

/**
 * #### 1 ####
 * 
 * Write a function that iterates over an array
 * and returns the count of even numbers
 * 
 * NOTE: call the function evenNumbersCounter
 */

export const evenNumbersCounter = (numbers) => {
    let counter = 0; // initialise value of counter to 0
    numbers.forEach((number) => {
        if (number % 2 === 0) {
            counter = counter + 1;
        }
    });
    return counter;
};

/**
 * #### 2 ####
 * 
 * Write a function that iterates over a string
 * and returns the count of vowels numbers
 * 
 * NOTE: call the function vowelsCounter
 */

export const vowelsCounter = (inputString) => {
    const stringToArray = inputString.split('');
    const vowelsArray = ['a', 'e', 'i', 'o', 'u'];
    let vowelCounter = 0;
    stringToArray.forEach((letter) => {
        if (vowelsArray.includes(letter)) {
            vowelCounter = vowelCounter + 1;
        }
    });
    return vowelCounter;
}