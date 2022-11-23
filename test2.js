function isPalindrome(s) {
    var len = s.length;
    if (len < 2) {
      return false;
    }
    var i = 0;
    var j = len - 1;
    while (i < j) {
      if (s[i] != s[j]) {
        return false;
      }
      i += 1;
      j -= 1;
    }
    return true;
  }
  const myNum =1214;
  console.log(isPalindrome(myNum));