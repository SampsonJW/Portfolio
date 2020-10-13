import React, { useState, useRef, useEffect } from 'react';
import { useInterval } from './useInterval';
import {
  CANVAS_SIZE,
  SNAKE_START,
  APPLE_START,
  SCALE,
  SPEED,
  DIRECTIONS,
} from './Constants';
import './Snake.css';

function Snake() {
  const canvasRef = useRef();
  const [snake, setSnake] = useState(SNAKE_START);
  const [apple, setApple] = useState(APPLE_START);
  const [dir, setDirection] = useState([0, -1]);
  const [speed, setSpeed] = useState(null);
  const [gameOver, setGameOver] = useState(false);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);

  useInterval(() => gameLoop(), speed);

  const endGame = () => {
    setSpeed(null);
    setGameOver(true);
  };

  const moveSnake = ({ keyCode }) => {
    switch (keyCode) {
      case 87:
        setDirection(DIRECTIONS[keyCode]);

        break;
      case 83:
        setDirection(DIRECTIONS[keyCode]);
        break;
      case 65:
        setDirection(DIRECTIONS[keyCode]);
        break;
      case 68:
        setDirection(DIRECTIONS[keyCode]);
        break;
    }
  };

  useEffect(() => {
    const keyPressHandler = (e) => {
      moveSnake(e);
    };

    document.addEventListener('keydown', keyPressHandler);
    return () => {
      document.removeEventListener('keydown', keyPressHandler);
    };
  }, []);

  const createApple = () =>
    apple.map((_a, i) => Math.floor(Math.random() * (CANVAS_SIZE[i] / SCALE)));

  const checkCollision = (piece, snk = snake) => {
    if (
      piece[0] * SCALE >= CANVAS_SIZE[0] ||
      piece[0] < 0 ||
      piece[1] * SCALE >= CANVAS_SIZE[1] ||
      piece[1] < 0
    )
      return true;

    for (const segment of snk) {
      if (piece[0] === segment[0] && piece[1] === segment[1]) return true;
    }
    return false;
  };

  const checkAppleCollision = (newSnake) => {
    if (newSnake[0][0] === apple[0] && newSnake[0][1] === apple[1]) {
      setSpeed(speed - 3.5);
      setScore(score + 100);
      let newApple = createApple();
      while (checkCollision(newApple, newSnake)) {
        newApple = createApple();
      }
      setApple(newApple);
      return true;
    }
    return false;
  };

  const gameLoop = () => {
    const snakeCopy = JSON.parse(JSON.stringify(snake));
    const newSnakeHead = [snakeCopy[0][0] + dir[0], snakeCopy[0][1] + dir[1]];
    snakeCopy.unshift(newSnakeHead);
    if (checkCollision(newSnakeHead)) endGame();
    if (!checkAppleCollision(snakeCopy)) snakeCopy.pop();
    if (score >= highScore) {
      setHighScore(score);
    }
    setSnake(snakeCopy);
  };

  const startGame = () => {
    setScore(0);
    setSnake(SNAKE_START);
    setApple(APPLE_START);
    setDirection([1, 0]);
    setSpeed(SPEED);
    setGameOver(false);
  };

  useEffect(() => {
    const context = canvasRef.current.getContext('2d');

    context.setTransform(SCALE, 0, 0, SCALE, 0, 0);
    context.clearRect(0, 0, window.innerWidth, window.innerHeight);
    context.fillStyle = '#fe7500';
    snake.forEach(([x, y]) => context.fillRect(x, y, 1, 1));
    context.fillStyle = 'lightblue';
    context.fillRect(apple[0], apple[1], 1, 1);
  }, [snake, apple, gameOver]);

  return (
    <div id='snake' className='snake-background'>
      <div className='snake-header'>
        <h5 className='pb-4' style={{ color: '#fe7500' }}>
          Snake
        </h5>
        <h6 style={{ color: 'white', padding: '1%' }}>Controls: WASD</h6>
        <p style={{ color: '#889098' }}>Try beating my high score of 1600 ;)</p>
        <div style={{ padding: '2%' }}>
          <canvas
            style={{ border: '5px solid white' }}
            ref={canvasRef}
            width={`${CANVAS_SIZE[0]}px`}
            height={`${CANVAS_SIZE[1]}px`}
          />
        </div>
        {gameOver && <div className='game-over'>GAME OVER!</div>}
        <div className='game-over'>Score: {score}</div>
        <div className='game-over'>High score: {highScore}</div>
        <div className='pb-5 pt-3'>
          <button className='start-button btn btn-success' onClick={startGame}>
            Start Game
          </button>
        </div>
      </div>
    </div>
  );
}

export default Snake;
