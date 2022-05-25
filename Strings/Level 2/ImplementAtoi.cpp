/*
Your task  is to implement the function atoi. 
The function takes a string(str) as argument and converts it to an integer and returns it.
Note: You are not allowed to use inbuilt function.

Examples:

Input: str = 123   Output: 123
Input: str = 21a   Output: -1


*/

class Solution{
  public:
    /*You are required to complete this method */
    int atoi(string str) {
        //Your code here
        int num = 0, i=0;
        bool isNegative = false;
        if(str[0] == '-') {
            isNegative = true;
            i=1;
        }
        for(i;i<str.length();i++){
            int code = str[i] - '0';
            if(code < 0 || code > 9) return -1;
            num = num* 10 + code;
        }
        return isNegative ? num * -1 : num;
    }
};

/* Solution Description :

Step 1 : Initialize num with 0 and isNegative with false
Step 2 : Check if the first character is '-' that means number is negative so store true in isNegative
Step 3 : Loop through characters of string and repeat below steps
          - You can get the same character in integer type by subtracting it with character '0' because ASCII values of that characters will be used
          - If you get the difference from 0 to 9 that means the character was numeric. If any alphabet or symbol will be there then difference will be either less than 0 or greater than 9
                For e.g (1) we got '5' then ASCII value of '5' is 53 and ASCII value of '0' is 48 . Subtracting them will give me 5. So we got 5 as integer as result.
                        (2) we got 'A' then ASCII value of 'A' is 98 and ASCII value of '0' is 48 . Subtracting them will give me 40. So we got to know that it was not numeric.
          - If value osf code lies between 0 t0 9 then add that integer to unit place to final num
Step 4 : If isNegative is true then return negative of num else num itself

NOTE : Here meaning of (str[i] - '0')  is :
        If I have a char numeric value and i want it into integer in C 
        Then we find the difference from 0 character(ASCII) 
        to the specified character and this way ascii values will used to subtract 
        that will give same character but in integer               
*/