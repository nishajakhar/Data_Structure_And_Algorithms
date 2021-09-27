let s = 'Nisha';
console.log('String Length: ', s.length);

let reverseString = '';

for (let i = s.length - 1; i >= 0; i--) {
  reverseString += s[i];
}
console.log('Reverse String : ', reverseString);
