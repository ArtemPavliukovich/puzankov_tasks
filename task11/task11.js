'use strict';

/* На вход нам подается массив с числами. Каждое число представляет собой вертикальную линию заданной 
высоты. Все линии находятся друг от друга на расстоянии 1. Нам необходимо найти такие 2 линии (2 числа) 
из этого массива, которые, образуя "контейнер", дадут максимально возможное количество воды. В качестве 
ответа необходимо вернуть максимальный  "объем"  воды для данного массива с числами. */

const searchBiggestContainer = (lines) => {
  let result = 0;

  for (let i = 0; i < lines.length - 1; i++) {
    for (let j = i + 1; j < lines.length; j++) {
      const sizeWater = Math.min(lines[i], lines[j]) * (j - i);

      if (sizeWater > result) {
        result = sizeWater;
      }
    }
  }

  return result;
};

console.log(searchBiggestContainer([1, 8, 6, 2, 5, 4, 8, 3, 7]));
console.log(searchBiggestContainer([1, 8, 6, 2, 5, 4, 8, 3, 7, 9]));
console.log(searchBiggestContainer([1, 8, 6, 2, 5, 4, 8, 3, 4]));
console.log(searchBiggestContainer([4, 3, 2, 1, 4]));