class Clock {
    constructor() {
      // 1. Create a Date object.
      // 2. Store the hours, minutes, and seconds.
      // 3. Call printTime.
      // 4. Schedule the tick at 1 second intervals.
      const date = new Date();
      this.hours = date.getHours();
      this.minutes = date.getMinutes();
      this.seconds = date.getSeconds();
      this.printTime()
    //   setInterval(this._tick.bind(this), 1000);
      setInterval(() => {this._tick()}, 1000);
    }
  
    printTime() {
      // Format the time in HH:MM:SS
      // Use console.log to print it.
      console.log(`${this.hours}:${this.minutes}:${this.seconds}`)
    }
  
    _tick() {
      // 1. Increment the time by one second.
      // 2. Call printTime.
      if (this.seconds < 59) {
        this.seconds = this.seconds + 1
      } else if (this.seconds === 59 && this.minutes < 59) {
        this.seconds = 0
        this.minutes = this.minutes + 1
      } else if (this.minutes === 59 && this.hours < 23) {
        this.minutes = 0
        this.hours = this.hours + 1
      } else {
        this.hours = 0
      }

      this.printTime();
    }
  }
  
  const clock = new Clock();