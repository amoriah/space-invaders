import { drow } from './drow.js';
import { moveInvaders } from './moveInvaders.js';
import { moveShooter } from './moveShooter.js';
import { shoot } from './shoot.js';
import { width  } from './constants.js';
import { currentShooterIndex } from './moveShooter.js';

export const grid = document.querySelector('.grid');
export const result = document.querySelector('.results');

for (let i = 0; i < width * width; i++) {
  const square = document.createElement('div');
  grid.appendChild(square);
}

export const squares = Array.from(document.querySelectorAll('.grid div'));
// console.log('squares', squares);

drow();

squares[currentShooterIndex].classList.add('shooter');

document.addEventListener('keydown', moveShooter);

const intervalId = setInterval(moveInvaders, 600);
setInterval(intervalId);

document.addEventListener('keydown', shoot);
