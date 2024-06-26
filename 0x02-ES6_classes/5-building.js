export default class Building {
  constructor(sqft) {
    this._sqft = sqft;
    if (!(new.target === Building)) this.evacuationWarningMessage();
  }

  get sqft() {
    return this._sqft;
  }

  evacuationWarningMessage() {
    if (!(this === Building)) {
      throw new Error(
        'Class extending Building must override evacuationWarningMessage',
      );
    }
  }
}
