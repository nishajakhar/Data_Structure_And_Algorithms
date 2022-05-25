/*
Write a program to Validate an IPv4 Address.
According to Wikipedia, IPv4 addresses are canonically represented in dot-decimal notation, which consists of four decimal numbers, each ranging from 0 to 255, separated by dots, e.g., 172.16.254.1 .
A valid IPv4 Address is of the form x1.x2.x3.x4 where 0 <= (x1, x2, x3, x4) <= 255.
Thus, we can write the generalized form of an IPv4 address as (0-255).(0-255).(0-255).(0-255).
Note: Here we are considering numbers only from 0 to 255 and any additional leading zeroes will be considered invalid.

Your task is to complete the function isValid which returns 1 if the given IPv4 address is valid else returns 0. The function takes the IPv4 address as the only argument in the form of string.

Examples:
Input: IPv4 address = 222.111.111.111      Output: 1
Input: IPv4 address = 5555..555            Output: 0
*/
const isValid = s => {
  //code here
  if (s.length > 15 || s.length < 7) return 0;
  let dot = 0;
  let num = '';
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '.') {
      if (num == '' || isNaN(num) || Number(num) < 0 || Number(num) > 255) return 0;
      num = '';
      dot++;
    } else {
      //Single 0 is accepted but leading zero is not valid
      if ((s[i] === '0' && num === '0') || (s[i] != '0' && num === '0')) return 0;
      num += s[i];
    }
  }
  if (dot != 3 || isNaN(num) || Number(num) < 0 || Number(num) > 255) return 0;
  return 1;
};

isValid('a.b.c.d');

/* Solution Description :

Step 1 : Initialize num with empty string and dot with 0
Step 2 : If string length is > 15 and < 7 then return false
Step 3 : Loop through characters of given string and repeat below steps
          - If charater is '.' then :
            - Check if num variable is a valid number between 0 and 255.
                - If Not Valid or empty then return false
                - If Valid then increment dot variable and empty num variable
          - If character is not '.' then :
              - Check if previous character was also 0 OR its leading zero before positive integer then return false
              - append character to num
Step 4 : Check the last stored num if its valid number between 0 and 255 AND dot = 3 then return true

Note : Single 0 is accepted but leading zero is not valid
    0.0.0.0 - Valid
    00.101.200.0 / 0.10.01.100 / 00.00.00.00 / a.b.c.d - Not Valid

*/
