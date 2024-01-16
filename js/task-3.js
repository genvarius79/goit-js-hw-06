class StringBuilder {
  #value;
  constructor(initialValue) {
    this.#value = initialValue;
  }
  getValue() {
    return this.#value;
  }
  padStart(str) {
    const temp = str + this.#value;
    this.#value = temp;
  }
  padEnd(str) {
    this.#value += str;
  }

  padBoth(str) {
    const temp = str + this.#value;
    this.#value = temp;
    this.#value += str;
  }
}
const builder = new StringBuilder('.');
console.log(builder.getValue()); // "."
builder.padStart('^');
console.log(builder.getValue()); // "^."
builder.padEnd('^');
console.log(builder.getValue()); // "^.^"
builder.padBoth('=');
console.log(builder.getValue()); // "=^.^="
