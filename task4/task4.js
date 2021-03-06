'use strict';
/* По условиям: необходимо написать функцию, которая принимает на вход два массива с числами. 
На выходе мы должны вернуть новый массив, который будет в себе содержать только те элементы, 
которые встречались в обоих массивах. Важно заметить, что если в первом массиве у нас было, 
например, три двойки, а во втором массиве было четыре двойки — в результирующем массиве их 
должно быть три. Так как три двойки встречались и в первом, и во втором массиве. */

const intersect = (arr1, arr2) => {
  const result = {};

  arr1.forEach(el => {
    if (result[`${el}`]) {
      result[`${el}`] += 1;
    } else {
      result[`${el}`] = 1;
    }
  });

  arr2.forEach(el => {
    if (result[`${el}`]) {
      result[`${el}`] -= 1;
    }
  });

  return arr1.filter(el => result[`${el}`] === 0);
};

console.log(intersect([4, 9, 5], [9, 4, 9, 8, 4]));
console.log(intersect([1, 2, 2, 1], [2, 2]));
console.log(intersect([1, 2], [3, 4]));