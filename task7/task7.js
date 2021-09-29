'use strict';
/* В этом видео мы с вами рассмотрим решение задачи про Class Names. Это одна из реальных задач, 
которую нашей команде пришлось реализовывать при разработке поиска Яндекса. */

const classNames = [
  'header', 'menu', 'menu-item', 'menu-item', 'menu-item', 'footer', 'menu', 'link', 'link', 'link', 'link'
];

const getClassNames = (classes) => {
  const result = {};
  classes.forEach(el => {
    result[el] ? result[el] += 1 : result[el] = 1;
  });
  return Object.entries(result).sort((a, b) => b[1] - a[1]).map(el => el[0]);
};

console.log(getClassNames(classNames));