/*
Given a string S of opening and closing brackets '(' and ')' only. 
The task is to find an equal point. 
An equal point is an index such that the number of closing brackets on right from 
that point must be equal to number of opening brackets before that point.

Examples:

Input: str = "(())))("      Output: 4
Input : str = "))"          Output: 2


*/

const findIndex = str => {
  let j = str.length - 1;
  let open = false;
  for (let i = 0; i <= j; i++) {
    if (str[i] == '(') {
      open = true;
      while (j > i) {
        if (str[j] == ')') {
          open = false;
          j--;
          break;
        }
        j--;
      }
    }
  }
  if (open) return j;
  return ++j;

  // Optimum Solution : But dont know why this is true
  //   let count = 0;
  //   for (
  //     let i = 0;
  //     i < str.length;
  //     i++ //Running a for loop from starting till the end
  //   ) {
  //     if (str[i] == ')') {
  //       //As the answer will always be the number of ‘)’ brackets
  //       count++;
  //     }
  //   }
  //   return count;
};

console.log('FInal....', findIndex('(())))('));
console.log('FInal...4444.', findIndex('))))(()'));
console.log('FInal...4444.', findIndex(')))'));
console.log('FInal...4444.', findIndex('))'));
