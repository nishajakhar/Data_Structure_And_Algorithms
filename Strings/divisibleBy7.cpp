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
        //complete the function here
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