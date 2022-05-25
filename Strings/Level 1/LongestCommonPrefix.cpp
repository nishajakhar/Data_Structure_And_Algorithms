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


/* Solution Description :

Step 1 : Initialize currEnd with 0 which will track currently matching string subarray
Step 2 : Initialize indexEnd with 0 which will track longest common substring of str1 in str2
Step 3 : Loop through characters of second string and repeat below steps
          - If character matches with currEnd character of str1 then go on incrementing currEnd
            And if currEnd becomes greater than indexEnd then update indexEnd[that we have found greater than him]
          - Else if characters are not same : 
                1. If CurrEnd didnt got above 0 that means do nothing just continue on loop
                2. If currEnd has value greater than 0 that means we sucessfully matched till previous iteration  
                and now its time to reinitialize currEnd to start searching from 0th index of str1 again 
          - Decrementing i will start the search from current index so that we dont loose this character
Step 4 : If we found nothing then indexEnd will be 0 so return -1 else return indexEnd which will have max index value

Note : If we found prefix of str1 in str2 then also we will continue till end because 
        we may find another longer prefix than before that why we maintain 2 variables
*/