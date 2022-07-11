import { Date } from './modules/Date.js';
import { timeString, navLinks, addButton } from './modules/DOMElements.js';
import { BookList } from './modules/BookList.js';
import { switchSection } from './modules/DOMManipulation.js';

const date = new Date();
date.setToElement(timeString);
timeString.addEventListener('click', () => {
  date.refresh();
  date.setToElement(timeString);
});

navLinks.forEach((element) => {
  element.addEventListener('click', (event) => {
    const { target } = event.currentTarget.dataset;
    switchSection(target);
  });
});

const bookList = new BookList();
bookList.refreshBookList();

addButton.addEventListener('click', () => {
  bookList.addBook();
  switchSection('booklist');
});
