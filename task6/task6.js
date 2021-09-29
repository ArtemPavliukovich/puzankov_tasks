'use strict';
/* По условиям задачи: необходимо посчитать количество островов в матрице. Островом считаются 
единицы (1), которые находятся друг рядом с другом по горизонтали и по вертикали. 
Водой считаются ячейки матрицы с нулями. */

const grid1 = [
  ['1', '1', '1', '1', '0'],
  ['1', '1', '0', '1', '0'],
  ['1', '1', '0', '0', '0'],
  ['0', '0', '0', '0', '0']
];

const grid2 = [
  ['1', '1', '0', '0', '0'],
  ['1', '1', '0', '0', '0'],
  ['0', '0', '1', '0', '0'],
  ['0', '0', '0', '1', '1']
];

const grid3 = [
  ['0', '0', '1', '0', '1']
];

const numIslands = grid => {
  const islands = [];
  
  grid.forEach((arr, index) => {
    arr.forEach((el, i) => {
      if (+el) {
        const isNewIsland = !islands.some(island => island.coord.some(coord => {
          switch (true) {
            case index - 1 === coord[0] && i === coord[1]:
              island.coord.push([index, i]);
              return true;
            case index + 1 === coord[0] && i === coord[1]:
              island.coord.push([index, i]);
              return true;
            case index === coord[0] && i + 1 === coord[1]:
              island.coord.push([index, i]);
              return true;
            case index === coord[0] && i - 1 === coord[1]:
              island.coord.push([index, i]);
              return true;
            default:
              return false;
          }
        }));
        
        if (isNewIsland || !islands.length) {
          islands.push({coord: [[index, i]]});
        }
      }
    });
  });
  
  return islands.length;
};

console.log(numIslands(grid1));
console.log(numIslands(grid2));
console.log(numIslands(grid3));