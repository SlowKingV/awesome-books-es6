import { pageSections } from "./DOMElements.js";

export const switchSection = (target) => {
  Object.keys(pageSections).forEach((key) => {
    if (key === target) pageSections[key].classList.add('active');
    else pageSections[key].classList.remove('active');
  });
};
