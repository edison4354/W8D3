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
      setInterval(this._tick.bind(this), 1000);
      // setInterval(() => {this._tick()}, 1000);
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
  
  // const clock = new Clock();

function addNumbers(sum, numsLeft, completionCallback) {

  sum ||= 0

  if (numsLeft > 0) {
    console.log(sum)
    reader.question("Enter number", function(input) {
      const num = parseInt(input)
      sum += num
      addNumbers(sum, numsLeft - 1, completionCallback)
    })
  } else {
    reader.close()
    completionCallback(sum)
  }
}

function completionCallback(number) {
  console.log("complete", number)
}

// addNumbers(0, 3, sum => console.log(`Total Sum: ${sum}`));

Function.prototype.myBind = function(context) {
    return () => {
        this.call(context)
    }
}

class Lamp {
    constructor() {
      this.name = "a lamp";
    }
}
  
const turnOn = function() {
    console.log("Turning on " + this.name);
};
  
const lamp = new Lamp();
  
// turnOn(); // should not work the way we want it to
  
// const boundTurnOn = turnOn.bind(lamp);
const myBoundTurnOn = turnOn.myBind(lamp);
  
// boundTurnOn(); // should say "Turning on a lamp"
// myBoundTurnOn(); // should say "Turning on a lamp"


const readline = require("readline");

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function askIfGreaterThan(el1, el2, callback) {
  // Prompt user to tell you whether el1 > el2; pass true back to the
  // callback if true; else false.
  reader.question(`Is ${el1} greater than ${el2}?`, function(input) {
    if (input === "yes") {
      callback(true)
    } else {
      callback(false)
    }
    // reader.close()
  })
};

function innerBubbleSortLoop(arr, i, madeAnySwaps, outerBubbleSortLoop) {
  // Do an "async loop":
  // 1. If (i == arr.length - 1), call outerBubbleSortLoop, letting it
  //    know whether any swap was made.
  // 2. Else, use `askIfGreaterThan` to compare `arr[i]` and `arr[i +
  //    1]`. Swap if necessary. Call `innerBubbleSortLoop` again to
  //    continue the inner loop. You'll want to increment i for the
  //    next call, and possibly switch madeAnySwaps if you did swap.

  if (i == arr.length - 1) {
    outerBubbleSortLoop(madeAnySwaps)
  }

  if (i < arr.length - 1) {
    askIfGreaterThan(arr[i], arr[i+1], function(isGreaterThan) {

      if (isGreaterThan) {
        [arr[i], arr[i+1]] = [arr[i+1], arr[i]]
        madeAnySwaps = true
      }
      innerBubbleSortLoop(arr, i+1, madeAnySwaps, outerBubbleSortLoop)

    })
  }
}

// Once you're done testing innerBubbleSortLoop, write outerBubbleSortLoop.
// Once you're done testing outerBubbleSortLoop, write absurdBubbleSort.

function absurdBubbleSort(arr, sortCompletionCallback) {
  function outerBubbleSortLoop(madeAnySwaps) {
    // Begin an inner loop if you made any swaps. Otherwise, call
    // `sortCompletionCallback`.
    if (madeAnySwaps) {
      innerBubbleSortLoop(arr, 0, false, outerBubbleSortLoop)
    } else {
      sortCompletionCallback(arr)
    }
  }

  outerBubbleSortLoop(true)

  // Kick the first outer loop off, starting `madeAnySwaps` as true.
}

absurdBubbleSort([8, 3, 2, 1], function(arr) {
  console.log("Sorted array: " + JSON.stringify(arr));
  reader.close();
});


// askIfGreaterThan(1, 2, res => console.log(`${res}`));