'use strict';
/* на вход нам приходит строка, содержащая только символы скобок. Следующие символы 
скобочек: ( ) { } [ ]. Необходимо написать функцию, которая проверит такую строку 
и вернет в результате true или false — в зависимости от того, является ли данная 
последовательность скобок валидной или нет. */

// вместо этой функции можно было собрать объект через reduce и потом в if сравнить, возможно было бы и быстрее
const isPairBracket = (str, open, close) => {
  return str.split('').filter(el => el === open).length === str.split('').filter(el => el === close).length;
}; 

const isValid = str => {
  if (isPairBracket(str, '(', ')') && isPairBracket(str, '{', '}') && isPairBracket(str, '[', ']')) {
    while (/\(\)|\{\}|\[\]/.test(str)) {
      str = str.replace(/\(\)|\{\}|\[\]/g, '');
    }

    return !str.length;
  }

  return false;
};

console.log(isValid('()[]{}'));
console.log(isValid('([)]'));
console.log(isValid('{[[]{}]}()()'));