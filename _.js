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

  inRange(number, startValue, endValue) {
    if (endValue === undefined) {
      endValue = startValue;
      startValue = 0;
    } else if (startValue > endValue) {
      startValue = startValue + endValue;
      endValue = startValue - endValue;
      startValue = endValue - startValue;
    }
    return number >= startValue && number < endValue;
  },

  words(string) {
    return string.split(' ');
  },
};

// Do not write or modify code below this line.
module.exports = _;
