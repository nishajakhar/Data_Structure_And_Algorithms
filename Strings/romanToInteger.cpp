/*
Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

      Symbol       Value
      --------------------------------
      I             1
      V             5
      X             10
      L             50
      C             100
      D             500
      M             1000
For example, 2 is written as II in Roman numeral, just two one's added together. 
12 is written as XII, which is simply X + II. 
The number 27 is written as XXVII, which is XX + V + II.

Examples :
Input: "LVIII"    Output: 58      Explanation: L = 50, V= 5, III = 3.
Input: "MCMXCIV"  Output: 1994    Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.
*/

class Solution {
  public:
    int romanToInt(string s) {
      int answer = 0;
      switch (s[0]) {
        case 'M': answer += 1000;
          break;
        case 'D': answer += 500;
          break;
        case 'C': answer += 100;
          break;
        case 'L': answer += 50;
          break;
        case 'X': answer += 10;
          break;
        case 'V': answer += 5;
          break;
        case 'I': answer += 1;
          break;
        default: answer += 0;
      };
      for (int i = 1; i < s.length(); i++) {
        switch (s[i]) {
          case 'M': if (s[i - 1] == 'C') answer += 800;
          else answer += 1000;
            break;
          case 'D': if (s[i - 1] == 'C') answer += 300;
          else answer += 500;
            break;
          case 'C': if (s[i - 1] == 'X') answer += 80;
          else answer += 100;
            break;
          case 'L': if (s[i - 1] == 'X') answer += 30;
          else answer += 50;
            break;
          case 'X': if (s[i - 1] == 'I') answer += 8;
          else answer += 10;
            break;
          case 'V': if (s[i - 1] == 'I') answer += 3;
          else answer += 5;
            break;
          case 'I': answer += 1;
            break;
          default: answer += 0;
        };
      };
      return answer;
    };
};