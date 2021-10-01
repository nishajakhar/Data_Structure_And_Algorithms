const reverse = x => {
  let reverseInteger = 0;
  while (x != 0) {
    let digit = x % 10;
    reverseInteger = reverseInteger * 10 + digit;
    x = parseInt(x / 10);
  }
  return reverseInteger;
};

console.log(reverse(-321));
