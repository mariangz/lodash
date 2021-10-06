const _ = {
  clamp(number, lowerBound, upperBound) {
    // if (number < lowerBound) {
    //   return lowerBound;
    // } else if (number > upperBound) {
    //   return upperBound;
    // } else {
    //   return number;
    // }

    const lowerClampedValue = Math.max(number, lowerBound);
    const clampedValue = Math.min(lowerClampedValue, upperBound);
    return clampedValue;
  },
};

// Do not write or modify code below this line.
module.exports = _;
