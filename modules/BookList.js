import { Book } from './Book.js';
import { booksSection, titleInput, authorInput } from './DOMElements.js';

export class BookList {
  constructor() {
    this.books = [];
    this.booksSection = booksSection;
    if (localStorage.books) this.books = JSON.parse(localStorage.getItem('books'));
  }

  refreshBookList() {
    let listItems = '';
    this.books.forEach((element, i) => {
      const book = `<li class="single-book">
                                 <p>"${this.books[i].title}" by ${this.books[i].author}</p>
                                 <button type="button" class="remove" data-index = "${i}">Remove</button>
                    </li>`;
      listItems += book;
    });

    this.booksSection.innerHTML = listItems;
    const removeButtons = this.booksSection.querySelectorAll('.remove');
    removeButtons.forEach((button) => {
      button.addEventListener('click', (event) => {
        this.removeButton(event.currentTarget);
      });
    });
  }

  addBook() {
    const book = new Book(titleInput.value, authorInput.value);
    this.books.push(book);
    this.refreshBookList();
    localStorage.setItem('books', JSON.stringify(this.books));
    titleInput.value = '';
    authorInput.value = '';
  }

  removeButton(button) {
    const indexBook = button.dataset.index;
    this.books.splice(parseInt(indexBook, 10), 1);
    this.refreshBookList();
    localStorage.setItem('books', JSON.stringify(this.books));
  }
}
