/*
Given an integer, convert it to a roman numeral.
Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M

Symbol       Value
I             1
V             5
X             10
L             50
C             100
D             500
M             1000


I can be placed before V (5) and X (10) to make 4 and 9. 
X can be placed before L (50) and C (100) to make 40 and 90. 
C can be placed before D (500) and M (1000) to make 400 and 900

Examples :
Input: num = 3         Output: "III"
Input: num = 58        Output: "LVIII"

*/
const convertToRoman = n => {
  let roman = '';
  let mapperNumeric = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  let mapper = {
    1000: 'M',
    900: 'CM',
    500: 'D',
    400: 'CD',
    100: 'C',
    90: 'XC',
    50: 'L',
    40: 'XL',
    10: 'X',
    9: 'IX',
    5: 'V',
    4: 'IV',
    1: 'I',
    0: '',
  };

  mapperNumeric.forEach(i => {
    let divideResult = parseInt(n / i);
    if (divideResult) roman = roman + mapper[i].repeat(divideResult);
    n = n % i;
  });
  return roman;
};

convertToRoman(3849);

/* Solution Description :

Step 1 : Initialize roman with empty string
Step 2 : Create a Map with every possible combination rules of roman characters 
          with their corresponding integer from highest to lowest
Step 3 : Loop through Map starting with highest roman character and repeat below steps
          - Divide the given number with integer equivalent of that roman character
          - The quotient found will tell how many times that roman character will be into final roman number
          - Append that roman equivalent of divisor to roman 
          - Assign the remainder left after dividing to the given number
Step 4 : Return final roman number

*/
