import Car from './10-car';

export default class EVCar extends Car {
  constructor(brand, motor, color, range) {
    super(brand, motor, color);
    this._range = range;
  }

  set range(value) {
    if (typeof value === 'number' && value > 0) {
      this._range = value;
    }
  }

  get range() {
    return this._range;
  }

  cloneCar() {
    const { brand, motor, color } = this;
    return new Car(brand, motor, color);
  }
}
