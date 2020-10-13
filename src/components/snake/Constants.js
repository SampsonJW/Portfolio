const CANVAS_SIZE = [600, 600];
const SNAKE_START = [
  [1, 0],
  [0, 0],
];
const APPLE_START = [8, 3];
const SCALE = 30;
const SPEED = 100;
const DIRECTIONS = {
  87: [0, -1], // up
  83: [0, 1], // down
  65: [-1, 0], // left
  68: [1, 0], // right
};

export { CANVAS_SIZE, SNAKE_START, APPLE_START, SCALE, SPEED, DIRECTIONS };
