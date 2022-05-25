
/*
Given two strings A and B. Find minimum number of times A has to be repeated such that B is a Substring of it. 
If B can never be a substring then return -1.

Examples:

Input: A = "abcd" B = "cdabcdab"   Output : 3
Input: A = "ab" B = "cab"          Output : -1

*/
class Solution {
  public:
    int minRepeats(string A, string B) {
        // code here
        int diff = B.length() / A.length();
        string substr;
        for(int i=1;i<=diff+1;i++){
            substr += A;
            if(substr.find(B) != -1) return i;
        }
        return -1;
    }
};