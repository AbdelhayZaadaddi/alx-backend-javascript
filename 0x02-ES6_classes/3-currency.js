export default class Currency {
  constructor(code, name) {
    if (typeof code === 'string' && typeof name === 'string') {
      this.code = code;
      this.name = name;
    } else {
      throw new Error('invalid data');
    }
  }

  get name() {
    return this._name;
  }

  set name(value) {
    if (typeof value === 'string') {
      this._name = value;
    }
  }

  get code() {
    return this._code;
  }

  set code(value) {
    if (typeof value === 'string') {
      this._code = value;
    }
  }

  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}
