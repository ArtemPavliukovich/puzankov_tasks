'use strict';
/* Это задача про валютные транзакции за день. Нам необходимо из массива всех валютных операций за день 
создать объект с суммами всех операций по каждой валюте. */

const input = [
  ['usd', 'buy', 10000],
  ['usd', 'sell', 5000],
  ['gbp', 'buy', 9000],
  ['eur', 'sell', 7000],
  ['uah', 'buy', 10000],
  ['usd', 'sell', 25000]
];

const getActivity = (arr) => {
  const result = {};
  
  arr.forEach(el => {
    if (!result[el[0]]) {
      result[el[0]] = [0, 0];
    }

    result[el[0]][el[1] === 'buy' ? 0 : 1] += el[2];
  });

  return result;
};

console.log(getActivity(input));