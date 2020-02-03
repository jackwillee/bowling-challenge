function Frame() {
    this.rolls = [];
  }
  getscore() {
    this.rolls.reduce((a, b) => a + b);
  }
}
Frame.prototype.roll = new function(numberofpins) {
  return this.rolls.push(numberofpins);

}
