'use strict';

const maze = [
  [1, 1, 1, 0, 0, 1],
  [1, 1, 1, 1, 0, 1],
  [0, 0, 0, 0, 0, 0],
  [0, 1, 1, 1, 1, 1],
  [0, 0, 0, 0, 0, 0],
  [1, 1, 1, 1, 1, 0]
];

const setWay = (way, nextStep) => {
  if (!way.some(step => step.x === nextStep.x && step.y === nextStep.y)) {
    way.push(nextStep);
    return true;
  }
};

const checkPath = (maze, start, end, way = [start]) => {
  const { x, y } = start;
  console.log(way);
  switch (true) {
    case maze[y - 1] && maze[y - 1][x] === 0:
      if (setWay(way, {x, y: y - 1})) {
        checkPath(maze, way[way.length - 1], end, way);
      }
    case maze[y + 1] && maze[y + 1][x] === 0:
      if (setWay(way, {x, y: y + 1})) {
        checkPath(maze, way[way.length - 1], end, way);
      }
    case maze[y]?.[x + 1] !== undefined && maze[y]?.[x + 1] === 0:
      if (setWay(way, {x: x + 1, y})) {
        checkPath(maze, way[way.length - 1], end, way);
      }
    case maze[y]?.[x - 1] !== undefined && maze[y]?.[x - 1] === 0:
      if (setWay(way, {x: x - 1, y})) {
        checkPath(maze, way[way.length - 1], end, way);
      }
    default:
      return;
  }
  
  //return way[way.length - 1].x === end.x && way[way.length - 1].y === end.y;
  // return checkPath(maze, way[way.length - 1], end, way);
};

console.log(checkPath(maze, {x: 3, y: 0}, {x: 5, y: 5}));