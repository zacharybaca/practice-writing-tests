function isFive(num) {
  // Your code here
  if (num === 5) {
    return true;
  }
  return false;
}

function isOdd(number) {
  // Your code here
  if (typeof number !== "number") {
    throw new Error();
  }

  if (number % 2 !== 0) {
    return true;
  } else {
    return false;
  }
}

function myRange(min, max, step = 1, arr = []) {
  // Your code here

  if (min > max) {
    return arr;
  } else {
    arr.push(min);
  }

  if (step === null || step === undefined) {
   step = 1;
  }
  return myRange(min += step, max, step, arr);
}


module.exports = { isFive, isOdd, myRange };
