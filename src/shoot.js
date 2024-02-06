import {
  // currentShooterIndex,
  width,
  alienInvaders,
  aliensRemoved,
  // results,
} from './constants.js';

import { squares, result } from './rewritescript.js';
import { currentShooterIndex } from './moveShooter.js';

export let results = 0;

export const shoot = e => {
  let laserId;
  let currentLaserIndex = currentShooterIndex;

  function moveLaser() {
    // if (squares[currentLaserIndex]) {
      squares[currentLaserIndex].classList.remove('laser');
      currentLaserIndex -= width;
      squares[currentLaserIndex].classList.add('laser');
      // console.log(squares[currentLaserIndex])

      if (squares[currentLaserIndex].classList.contains('invader')) {
        squares[currentLaserIndex].classList.remove('laser');
        squares[currentLaserIndex].classList.remove('invader');
        squares[currentLaserIndex].classList.add('boom');

        setTimeout(
          () => squares[currentLaserIndex].classList.remove('boom'),
          300
        );
        clearInterval(laserId);

        const alienRemoved = alienInvaders.indexOf(currentLaserIndex);
        aliensRemoved.push(alienRemoved);
        results++;
        result.innerHTML = results;
      }
    // }
  }
  // console.log(e.key)
  if (e.key === 'ArrowUp') {
    laserId = setInterval(moveLaser, 100);
  }
};
