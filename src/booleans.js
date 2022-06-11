function negate(a) {
  if (a == true) {
    return false
  } else {
    return true
  }
}; // shorter way:  return !a; 

function both(a, b) {
  if (a == true && b == true) {
    return true
  } else {
    return false
  }
}; // shorter way:   return a && b == true; 

function either(a, b) {
  if (a == true || b == true) {
    return true
  } else {
    return false
  }
};

function none(a, b) {
  if (a || b == true) {
    return false
  } else {
    return true
  }
};

function one(a, b) {
  return a === !b;
};

function truthiness(a) {
  return !!a;
};

function isEqual(a, b) {
  return a === b;
};

function isGreaterThan(a, b) {
  return a > b;
};

function isLessThanOrEqualTo(a, b) {
  return a <= b;
};

function isOdd(a) {
  if (a % 2 == 0) {
    return false
  } else {
    return true
  }
};

function isEven(a) {
  if (a % 2 == 0) {
    return true
  } else {
    return false
  }
};

function isSquare(a) {
  return Math.sqrt(a) % 1 === 0;
};

function startsWith(char, string) {
  if (string.charAt(0) === char) {
    return true
  } else {
    return false
  }
};

function containsVowels(string) {
  if (string.match (/[aeiou]/gi)) {
    return true
  } else {
    return false
  }
}
  //const vowes = ['a', 'e', 'i', 'o','u']
  //const includes = vowes.map((v) => {
  //return string.toLowerCase().includes(v)
  //}).includes(true)
  //return includes

function isLowerCase(string) {
  if (string.toLowerCase() === string) {
    return true
  } else {
    return false
  }
};

module.exports = {
  negate,
  both,
  either,
  none,
  one,
  truthiness,
  isEqual,
  isGreaterThan,
  isLessThanOrEqualTo,
  isOdd,
  isEven,
  isSquare,
  startsWith,
  containsVowels,
  isLowerCase
};
