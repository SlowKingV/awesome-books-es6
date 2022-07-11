import { pageSections } from './DOMElements.js';

export default (target) => {
  Object.keys(pageSections).forEach((key) => {
    if (key === target) pageSections[key].classList.add('active');
    else pageSections[key].classList.remove('active');
  });
};
