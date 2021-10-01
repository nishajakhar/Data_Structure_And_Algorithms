const romanToInt = s => {
  let toAdd = 0;
  for (let i = 0; i < s.length; i++) {
    if (i >= 1) {
      if (s[i - 1] == 'I' && s[i] == 'V') {
        toAdd += 3;
        continue;
      }
      if (s[i - 1] == 'I' && s[i] == 'X') {
        toAdd += 8;
        continue;
      }
      if (s[i - 1] == 'X' && s[i] == 'L') {
        toAdd += 30;
        continue;
      }
      if (s[i - 1] == 'X' && s[i] == 'C') {
        toAdd += 80;
        continue;
      }
      if (s[i - 1] == 'C' && s[i] == 'D') {
        toAdd += 300;
        continue;
      }
      if (s[i - 1] == 'C' && s[i] == 'M') {
        toAdd += 800;
        continue;
      }
    }
    switch (s[i]) {
      case 'I':
        toAdd += 1;
        break;
      case 'V':
        toAdd += 5;
        break;
      case 'X':
        toAdd += 10;
        break;
      case 'L':
        toAdd += 50;
        break;
      case 'C':
        toAdd += 100;
        break;
      case 'D':
        toAdd += 500;
        break;
      case 'M':
        toAdd += 1000;
    }
  }
  return toAdd;
};

console.log(romanToInt(['I', 'X']));
