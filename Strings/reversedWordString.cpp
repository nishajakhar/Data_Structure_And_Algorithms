/*
Given an input string s, reverse the order of the words.
The words in s will be separated by at least one space.
Return a string of the words in reverse order concatenated by a single space.
Note that s may contain leading or trailing spaces or multiple spaces between two words.


Examples:

Input: "the sky is blue"        Output: "blue is sky the"
Input: "  hello world  "        Output: "world hello"

*/

//Solution 1 : Without Stack
class Solution {
public:
    string reverseWords(string s) {
        char prevSpace = ' ';
        string curr;
        string revWordStr;
        for(char c : s) {
            if(c == ' ' && prevSpace == ' ') continue;
            if(c != ' ') {
                curr += c;
                prevSpace = '\0';
            }
            else {
                prevSpace = ' ';
                revWordStr.empty() ? revWordStr = curr : revWordStr = curr + ' ' + revWordStr;
                curr.clear();
            }
        }
        if(revWordStr.empty()) return curr;
        else if(!curr.empty()) return revWordStr = curr + ' ' + revWordStr;
        else return revWordStr;
    }
};

//Solution 2 : With Stack

class Solution {
public:
    string reverseWords(string s) {
        char prevSpace = ' ';
        string currWord;
        stack<string> word;
        string reversedWordString;
        for(char c : s) {
            
            if(c == ' ' && prevSpace == ' ') continue;
            if(c != ' ') {
                currWord += c;
                prevSpace = '\0';
            }
            else {
                prevSpace = ' ';
                word.push(currWord);
                currWord.clear();
            }
        }
        if(!currWord.empty()) word.push(currWord);
        while(!word.empty()){
            reversedWordString += word.top();
            if(word.size() != 1) reversedWordString += ' ';
            word.pop();
        }
        return reversedWordString;
    }
};