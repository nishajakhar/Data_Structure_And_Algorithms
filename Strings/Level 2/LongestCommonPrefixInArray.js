/*
Given a array of N strings, find the longest common prefix among all strings present in the array.

Examples:

Input: N = 4  arr[] = {geeksforgeeks, geeks, geek,geezer}        Output: gee
Input: N = 2  arr[] = {hello, world}                             Output: -1

*/
const longestCommonPrefix = strs => {
  let prefix = strs[0];
  for (let i = 1; i < strs.length; i++) {
    while (strs[i].indexOf(prefix) != 0) {
      prefix = prefix.substring(0, prefix.length - 1);
    }
    if (prefix == '') break;
  }
  return prefix;
};

console.log(longestCommonPrefix(['Nisha', 'Nish', 'app', 'Nis', 'Ni']));

/* Solution Description :

Step 1 : Initialize prefix with first string in array
Step 2 : Loop through given array and repeat below steps
          - Run a while loop untill prefix found in current string
              - If not found then remove last character from prefix and repeat
              - If prefix found at index 0 then break from while loop
          - At end of every outer loop iteration Check prefix length. If it becomes zero then array items dont have any common prefix and break the loop returning -1
Step 3 : Return prefix 

*/
