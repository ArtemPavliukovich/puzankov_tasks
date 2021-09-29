'use strict';
/* Условия следующие:  нам необходимо написать функцию, которая принимает в качестве аргумента 
строку и возвращает индекс первого уникального символа. Если мы не найдем ни одного уникального 
символа, то функция должна вернуть -1. */ 

const firstUniqChar = str => {
  const result = {};

  for (let i = 0; i < str.length; i++) {
    if (result[str[i]]) {
      result[str[i]] += 1;
    } else {
      result[str[i]] = 1;
    }
  }

  const char = Object.entries(result).find(el => el[1] === 1);

  return char ? str.indexOf(char[0]) : -1;
};

console.log(firstUniqChar('leetcode'));
console.log(firstUniqChar('loveleetcode'));
console.log(firstUniqChar('aabb'));