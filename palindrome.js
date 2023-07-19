function isPalindrome(str) {
  str = str.toLowerCase().replace(/[^a-z0-9]/g, "");
  var reversedStr = str.split("").reverse().join("");
  return str === reversedStr;
}