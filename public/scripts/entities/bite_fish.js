class BiteFish extends Fish {
  constructor(options){
    super (options);
    this.imageUri = '/images/bitefish.gif';
    this.surgeSecondsLeft = 0;
    this.maxSurge = 1.0;
    this.surgMult = 3.0;
    this.height = 90;
    this.width = 90;
    this.maxSwimSpeed = 500;
  }

  onClick(event) {
    this.kill(event);
  }


}
