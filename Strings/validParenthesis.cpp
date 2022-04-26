/* Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:
  Open brackets must be closed by the same type of brackets.
  Open brackets must be closed in the correct order.
 
Examples:
  Input: s = "()"        Output: true
  Input: s = "()[]{}"    Output: true
  Input: s = "(]"        Output: false
*/

#include<bits/stdc++.h>
using namespace std;

class Solution
{
  public:
  bool matchParenthesis(char str, char top){
    return ((str == '}' && top == '{') ||
        (str == ']' && top == '[') ||
        (str == ')' && top == '('));
  };
  public:
  //Function to check if brackets are balanced or not.
  bool ispar(string x)
  {
    if(x.length() % 2 != 0) return false;
    stack<int> parenthesis;
    for(i : x){
      if(i == '{' || i == '(' || i == '[') parenthesis.push(i);
      else if(matchParenthesis(i, parenthesis.top())) parenthesis.pop();
      else return false;
    }
  return parenthesis.empty();
  }
};


int main(){
  int t;
  string a;
  cin>>t;
  while(t--){
    cin>>a;
    Solution obj;
    if(obj.ispar(a)) cout <<"Balanced"<<endl;
    else cout << "Not Balanced"<<endl;
  }
}