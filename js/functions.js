function checkStringLength(str, maxLength) {
  if (str.length <= maxLength) {
    return true;
  } else {
    return false;
  }
}

function checkPalindrome(str) {
  str = str.toLowerCase().replace(/ /g, '');
  let len = str.length;
  for (let i = 0; i < len/2; i++) {
    if (str[i] !== str[len-1-i]) {
      return false;
    }
  }
  return true;
}

function extractDigits(str) {
  const digits = str.match(/\d/g);
  if (!digits) {
    return NaN;
  }
  return parseInt(digits.join(''));
}

function padStart(str, targetLength, padString) {
  if (str.length >= targetLength) {
    return str;
  }

  const paddingLength = targetLength - str.length;
  const paddingString = padString.repeat(Math.ceil(paddingLength / padString.length)).substring(0, paddingLength);

  return paddingString + str;
}
