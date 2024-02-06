import { remove } from './remove.js';
import { drow } from './drow.js';
import {
  alienInvaders,
  width,
  // direction,
  // isGoingRight,
  // currentShooterIndex,
  aliensRemoved,
} from './constants.js';
import { result, squares } from './rewritescript.js';
import { currentShooterIndex } from './moveShooter.js';
// import { intervalId } from './rewritescript.js';

let direction = 1;
let isGoingRight = true;

export const moveInvaders = () => {
  const leftEdge = alienInvaders[0] % width === 0; // кратно 15
  const rightEdge =
    alienInvaders[alienInvaders.length - 1] % width === width - 1;
  remove();

  if (rightEdge && isGoingRight) {
    for (let i = 0; i < alienInvaders.length; i++) {
      alienInvaders[i] += width + 1;
      direction = -1;
      isGoingRight = false;
    }
  }

  if (leftEdge && !isGoingRight) {
    for (let i = 0; i < alienInvaders.length; i++) {
      alienInvaders[i] += width - 1;
      direction = 1;
      isGoingRight = true;
    }
  }

  for (let i = 0; i < alienInvaders.length; i++) {
    alienInvaders[i] += direction;
  }

  drow();

  if (squares[currentShooterIndex].classList.contains('invader')) {
    result.innerHTML = 'GAME OVER';
    // clearInterval(intervalId);
  }

  if (aliensRemoved.length === alienInvaders.length) {
    result.innerHTML = 'YOU WIN';
    // clearInterval(invadersId);
  }
};
