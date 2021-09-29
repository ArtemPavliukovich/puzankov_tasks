'use strict';
// Даны массивы где числа идут с 1 и по порядку, надо найти n-ое пропущенное число

const findMissingNumber = (nums, n) => {
  const result = [];

  for (let i = 1;; i++) {
    if (!nums.find(el => el === i)) {
      result.push(i);
    }

    if (result.length === n) break;
  }
  
  return result[result.length - 1];
};

console.log(findMissingNumber([1, 2, 3, 4], 2));
console.log(findMissingNumber([2, 3, 4, 7, 11], 5));