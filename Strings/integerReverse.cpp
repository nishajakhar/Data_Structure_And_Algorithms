class Solution {
public:
    int reverse(int x) {
        int reverseInteger = 0;
        while(x != 0){
            int digit = x%10;
             if (reverseInteger > INT_MAX/10 || (reverseInteger == INT_MAX / 10 && digit > 7)) {
                 reverseInteger = 0;
                 return 0;
             }
                if (reverseInteger < INT_MIN/10 || (reverseInteger == INT_MIN / 10 && digit < -8)){
                 reverseInteger = 0;
                 return 0;
             }
            reverseInteger = reverseInteger * 10 + digit;
            x=x/10;
        }      
        return reverseInteger;
    }
};