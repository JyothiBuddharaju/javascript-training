/**
 * Write a function that accepts an array and a search word to 
 * determine if the search word is found in the array.
 * 
 * Return the item found in the array that matches the search word
 * otherwise return a string 'Sorry no such item found'
 * 
 * NOTE: use the find method
 *  
 * */


const itemFinder = (inputArray, searchItem) => {
  const result = (inputArray.find((element) => {
    return element.includes(searchItem)
  }))
  if (result) {
    return result
  } else {
    return 'Sorry no such item found'
  }
}

export default itemFinder