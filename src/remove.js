import {alienInvaders} from './constants.js';
import { squares } from './rewritescript.js';

export const remove = () => {
  for (let i = 0; i < alienInvaders.length; i++) {
    squares[alienInvaders[i]].classList.remove('invader');
  }
};
