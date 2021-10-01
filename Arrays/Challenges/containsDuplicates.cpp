// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.
// Example 1:
// Input: nums = [1,2,3,1]
// Output: true

// Example 2:
// Input: nums = [1,2,3,4]
// Output: false

class Solution {
public:
    bool containsDuplicate(vector<int>& nums) {
        map<int, bool> elements;
        for(int i=0; i<nums.size(); i++){
            if(elements[nums[i]]) return true;
            else elements[nums[i]] = true;
        }
        return false;
    }
};