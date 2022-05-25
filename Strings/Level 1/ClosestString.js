/*
Given a list of words followed by two words, the task to find the minimum distance between the given two words in the list of words

Input:
S = { "the", "quick", "brown", "fox", "quick"}  word1 = "the"  word2 = "fox"
Output: 3

Input:
S = {"geeks", "for", "geeks", "contribute", "practice"} word1 = "geeks" word2 = "practice"
Output: 2
*/

function shortestDistance(s, word1, word2) {
  let distance = Number.MAX_VALUE;
  let word1Found = -1;
  let word2Found = -1;
  let i = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] == word1) word1Found = i;
    if (s[i] == word2) word2Found = i;
    if (word1Found != -1 && word2Found != -1) distance = Math.min(distance, Math.abs(word2Found - word1Found));
  }
  return distance;
}

shortestDistance(['the', 'quick', 'brown', 'fox', 'quick', 'the', 'fox'], 'fox', 'the');

/* Solution Description :

Step 1 : Initialize distance with max 
Step 2 : Initialize word1Found and word2Found with -1 depicting as not found yet
Step 3 : Loop through string array and repeat below steps
          - If word1 found then assign it to word1Found
          - Same for 2nd word
          - If both found then find minimum value from current distance value 
            and previous distance value  and assign to distance 
Step 4 : Return distance

*/
