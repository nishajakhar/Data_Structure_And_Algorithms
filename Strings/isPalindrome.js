const isPalindrome = x => {
  if (x < 0) return false;
  let reverse = 0;
  while (x != 0) {
    reverse = reverse * 10 + (x % 10);
    x = parseInt(x / 10);
  }
  if (x == reverse) return true;
  return false;
};
console.log(isPalindrome(121));
console.log(isPalindrome(123));
console.log(isPalindrome(-121));
