'use strict';
//const myArray = [true, 'hello', 5, 12, -200, false, false, 'word'];

const countTypesInArray = (arr) => {
  const count = {
    number: 0,
    string: 0,
    boolean: 0,
  };
  for (const el of arr) {
    if (typeof el === 'number') count.number++;
    if (typeof el === 'string') count.string++;
    if (typeof el === 'boolean') count.boolean++;
  }
  return count;
};

//console.log(JSON.stringify(countTypesInArray(myArray)));

module.exports = { countTypesInArray };
