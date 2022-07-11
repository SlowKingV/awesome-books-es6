import { DateTime } from "./luxon.js";

export class Date {
  constructor() {
    this.refresh();
  }

  refresh() {
    this.time = DateTime.now();
  }

  setToElement(element) {
    element.textContent = this.#formatTime();
  }

  #formatTime() {
    const ordinal = ['st', 'nd', 'rd'];
    let day = `${this.time.day}`;
    let hour = `${this.time.hour}`;
    let dayHalf = 'am';

    if (this.time.day > 3) day += 'th';
    else day += `${ordinal[this.time.day - 1]}`;
    if (this.time.hour > 12) {
      hour = `${this.time.hour - 12}`;
      dayHalf = 'pm';
    }

    return `${this.time.monthLong} ${day} ${this.time.year}, ${hour}:${this.time.minute}:${this.time.second} ${dayHalf}`;
  }
}