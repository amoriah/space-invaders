import {
  // currentShooterIndex,
  width,
} from './constants.js';
import { squares } from './rewritescript.js';

export let currentShooterIndex = 202;

export const moveShooter = e => {
  squares[currentShooterIndex].classList.remove('shooter');
  switch (e.key) {
    case 'ArrowLeft': {
      if (currentShooterIndex % width !== 0) {
        currentShooterIndex--;
      }
      break;
    }
    case 'ArrowRight': {
      if (currentShooterIndex % width < width - 1) {
        currentShooterIndex++;
      }
      break;
    }
  }

  squares[currentShooterIndex].classList.add('shooter');
};
