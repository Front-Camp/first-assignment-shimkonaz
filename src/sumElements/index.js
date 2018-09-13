/**
 *  This function should return sum of
 *  all numbers and strings which can be converted to numbers
 *  in passed array
 *
 * @param {Array<number|string>} arr - this is an array of numbers or strings
 * @return {number} - sum of all numbers of array
 * @example
 * sumElements([1, 2, 3]);          // 6
 * sumElements(['1', 'hi', 3]);     // 4
 * sumElements([Infinity, NaN, 1]); // 1
 */
const sumElements = arr => {
  /* your logic here...*/
  let sum = 0;
  
  for(let item of arr) {
    // if(item === Infinity) continue;
    // if(item === -Infinity) continue;
    // if(Number.isNaN(item)) continue;
    let parsedItem;
    
    if(typeof item === 'string' && item.indexOf('px') > -1) {
        parsedItem = item.slice(0, item.indexOf('px'));
    } else {
      parsedItem = +item;
    }

    if(Number.isFinite(parsedItem)) {
      sum += parsedItem;
    }
  }
  return sum;
};

export default sumElements;
