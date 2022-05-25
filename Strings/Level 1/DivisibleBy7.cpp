/*
Given an n-digit large number in form of string, check whether it is divisible by 7 or not. 
Print 1 if divisible by 7, otherwise 0.

Examples : 
Input: num = "8955795758"    Output: 1
Input: num = "1000"          Output: 0

*/

class Solution{
  public:
    int isdivisible7(string num){
        int arr[6] = {1,3,2,6,4,5};
        int k = 0;
        int sum=0;
        for(int i=num.length() -1 ; i>=0;i--){
            sum += (num[i] - '0') * arr[k++ % 6];
        }
        if(sum % 7 ==0) return 1;
        else return 0;
    }
};

/* Solution Description :

Step 1 : Create array with 6 predefined values [1,3,2,6,4,5]
Step 2 : Initialize sum with 0 and k with 0 which will keep incrementing over above array
Step 3 : Loop through characters of string from backward and repeat below steps
          - Multiply that character with value at kth index in array
          - Add that to previous sum
          - Increment k [Start with 0 again if k becomes >= 6 as it will out of bound]
          - If that sum is divisible by 7 then whole number will be also divisible
Step 4 : Return 1 is divisible else 0


Note : Here meaning of (num[i] - '0')  is :
        If I have a char numeric value and i want it into integer in C 
        Then we find the difference from 0 character(ASCII) 
        to the specified character and this way ascii values will used to subtract 
        that will give same character but in integer

*/