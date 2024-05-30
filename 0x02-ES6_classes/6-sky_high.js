import building from './5-building';

export default class SkyHighBuilding extends building {
  constructor(sqft, floors) {
    super(sqft);
    this._floors = floors;
  }

  set floors(value) {
    if (typeof value === 'number') {
      this._floors = value;
    }
  }

  get floors() {
    return this._floors;
  }

  set sqft(value) {
    if (typeof value === 'number') {
      this._sqft = value;
    }
  }

  get sqft() {
    return this._sqft;
  }

  evacuationWarningMessage() {
    return `Evacuate slowly the ${this._floors} floors`;
  }
}
