/*
Given two strings str1 and str2 of the same length. Find the longest prefix of str1 which is common in str2.
If there is no common prefix then the returning list should contain [-1,-1].

Example :
Input: str1 = "geeks" str2 = "dgeek"                      Output: 0 3
Input: str1 = "practicegeeks"    str2 = "coderpractice"   Output: 0 7

*/

class Solution{
public:
    vector<int> longestCommonPrefix(string str1, string str2){
        int currEnd=0;
        int indexEnd = 0;
        for(int i=0;i<str2.length();i++){
            if(str2[i] == str1[currEnd]) {
                currEnd++;
                if(currEnd > indexEnd) indexEnd = currEnd;
            }
            else if(currEnd != 0) {
                currEnd=0;
                i--;
            }
        }
        if(indexEnd == 0) return {-1, -1};
        return {0, --indexEnd};
        
    }
};