/*

Two strings s and t are isomorphic if the characters in s can be replaced to get t. 
If there is a one to one mapping possible for every character of str1 to 
every character of str2 while preserving the order.
Note: No two characters may map to the same character, but a character may map to itself.

Examples : 
Input: s = "egg", t = "add"       Output: true
Input: s = "abz", t = "bdb"        Output: false


*/

const areIsomorphic = (str1, str2) => {
  if (str1.length != str2.length) return 0;
  let charMapper = new Object();
  let boolMapper = new Object();
  let flag = true;
  for (let i = 0; i < str1.length; i++) {
    if (charMapper[str1[i]]) {
      if (charMapper[str1[i]] != str2[i]) return (flag = false);
    } else {
      if (boolMapper[str2[i]] == true) return (flag = false);
      charMapper[str1[i]] = str2[i];
      boolMapper[str2[i]] = true;
    }
  }
  return flag;
};

console.log(areIsomorphic('acb', 'yuy'));

/* Solution Description :

Step 1 : Create two Hashmap : 
            - charMapper for for char to char mapping
            - boolMapper for Taken characters of str2 so that same character of str2 doesnt map to two different characters of str1
Step 2 : If both string's length is not same then return
Step 3 : Loop through string's length and repeat below steps
          - If str1 char is found in charMapper then match the value stored in it with the current character of str2 
                - If character not matched then break the loop returning false
                - Else if character matched then do nothing
          - If str1 Char not found in charMapper then :
                - If str2 char is true in boolMapper then it means its already taken. So break the loop returning false
                - Else str2 char is not found in boolMapper then store true in boolMapper and add the charater mapping in charMapper

*/
