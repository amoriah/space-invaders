import { alienInvaders, aliensRemoved } from './constants.js';
import { squares } from './rewritescript.js';

export const drow = () => {
    // console.log('alienInvaders', alienInvaders)
    // console.log('squares', squares)
  for (let i = 0; i < alienInvaders.length; i++) {
    if (!aliensRemoved.includes(i)) {
      squares[alienInvaders[i]].classList.add('invader');
    }
  }
};
