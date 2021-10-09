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

  pad(string, length) {
    if (string.length >= length) {
      return string;
    } else {
      const padLength = length - string.length;
      const padStartLength = Math.floor(padLength / 2);
      const padEndLength = Math.ceil(padLength / 2);
      const pad = ' ';
      return `${pad.repeat(padStartLength)}${string}${pad.repeat(
        padEndLength
      )}`;
    }
  },

  has(object, key) {
    const keys = Object.keys(object);
    return keys.includes(key);
  },

  invert(object) {
    let invertedObject = {};
    for (let key in object) {
      let originalValue = object[key];
      invertedObject[originalValue] = key;
    }
    return invertedObject;
  },

  findKey(object, predicate) {
    for (let key in object) {
      if (predicate(object[key])) {
        return key;
      }
    }
    return undefined;
  },

  drop(array, number) {
    number = number ?? 1;
    return array.splice(number);
  },
};

// Do not write or modify code below this line.
module.exports = _;
