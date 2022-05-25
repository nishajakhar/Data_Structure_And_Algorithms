/*
Leetcode : 
A pangram is a sentence where every letter of the English alphabet appears at least once.
Given a string sentence containing only lowercase English letters, 
return true if sentence is a pangram, or false otherwise

Examples:
Input: sentence = "thequickbrownfoxjumpsoverthelazydog"     Output: true
Input: sentence = "leetcode"                                Output: false

*/

const checkIfPangram = sentence => {
  let mapper = new Object();
  for (let i = 0; i < sentence.length; i++) {
    mapper[sentence[i].charCodeAt(0)] = true;
  }
  if (Object.keys(mapper).length >= 26) return true;
  else return false;
};

checkIfPangram('thequickbrownfoxjumpsoverthelazydog');

/*

GeeksForGeeks : 

Examples:
Input: S = Bawds jog, flick quartz, vex nymph               Output: true
Input: sentence = "sdfs  , jhrt &"                                    Output: false

*/

class Solution {
  //Function to check if a string is Pangram or not.
  checkPangram(str) {
    str = str.toLowerCase();
    let mapper = new Object();
    for (let i = 0; i < str.length; i++) {
      let code = str[i].charCodeAt(0);
      if (code > 96 && code < 123) mapper[code] = true;
    }
    if (Object.keys(mapper).length >= 26) return true;
    else return false;
  }
}

checkIfPangram('Bawds jog, flick quartz, vex nymph');

/* Solution Description :

Step 1 : Declare a Hashmap that will store all character existense of string
Step 2 : Make the string lowercase
Step 3 : Loop through characters of string and repeat below steps
          - Find ASCII code of that charater and 
            if its between 'a'(92) to 'z'(122) then add that character to mapper 
Step 4 : If length of mapper gets equal to or greater than 26 than 
        that means we encountered all alphabets so return true else false

*/
