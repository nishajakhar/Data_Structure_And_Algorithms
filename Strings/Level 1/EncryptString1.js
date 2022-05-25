/*
Encrypt a given string : Every substring of identical letters is replaced by a single instance of that letter followed by the number of occurrences of that letter. Then, the string thus obtained is further encrypted by reversing it..

Examples : 
Input: s = "aabc"       Output: 1c1b2a
Input: s = "aaaaa"      Output: 5a

*/

const encryptString = s => {
  let prev = '';
  let count = 1;
  let encryptString = '';
  for (let i = 0; i < s.length; i++) {
    if (s[i] == prev) count++;
    else {
      //If prev is empty there is no meaning to prepend anything i.e when i = 0
      if (prev) encryptString = count + prev + encryptString;
      prev = s[i];
      count = 1;
    }
  }
  encryptString = count + prev + encryptString;
};

encryptString('abbbbbtyuicccc');

/* Solution Description :

Step 1 : Initialize count with 0
Step 2 : Initialize prev with empty string
Step 3 : Loop through characters of string and repeat below steps
          - If current character is same as prev then increment count
          - Else Prepend the count with character into encrypted string and also assign prev      the new charater and count with 1
Step 4 : When loop ends we still have last character remaining in prev so lets prepend it also          with its count

NOTE : For the reversal we can also use stack But in this solution we are using prepend                 solution in each loop iteration
*/
