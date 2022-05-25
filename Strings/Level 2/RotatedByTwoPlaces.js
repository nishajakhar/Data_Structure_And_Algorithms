/*

Given two strings a and b. The task is to find if the string 'b' can be obtained by rotating another string 'a' by exactly 2 places.

Examples:

Input: a = amazon b = azonam                    Output: 1
Input: a = geeksforgeeks b = geeksgeeksfor      Output: 0


*/

//My first Solution
const isRotated = (str1, str2) => {
  let len = str1.length,
    clockwise = true,
    anticlock = true;
  if (str1.length != str2.length) return false;
  for (let i = 0, j = len - 2; i < len; i++, j++) {
    if (!clockwise && !anticlock) return false;

    if (clockwise && str1[i] != str2[(i + 2) % len]) clockwise = false;
    if (anticlock && str1[i] != str2[j % len]) anticlock = false;
  }
  return clockwise || anticlock ? true : false;
};

isRotated('abbdbf', 'bfgbad');

// Optimum solution :

const isRotated2 = (str1, str2) => {
  if (str1.length != str2.length) return false;
  let ans = (str2 + str2).indexOf(str1);
  if (ans == 2 || ans == str1.length - 2) return true;
  return false;
};

isRotated2('abbdbf', 'bfgbad');

/* Solution Description  :

Step 1 : Initialize answer with 0
Step 2 : Run First switch case for the first character so that we dont end up accessing prev at -1 index
Step 3 : Loop through characters of given string and repeat below steps
          - Using switch find out if previous character was smaller than current then according to combination rules add accordingly
              - If current character is M and prevous was C then it means we added C(100) in previous iteration but now it CM which means 900 so we will add remaining i.e 800
              - Same for other combinations
              - And if current charcter is smaller than previous according to roman character rules then just add the integer value of that character into final answer
Step 4 : Return answer



*/
