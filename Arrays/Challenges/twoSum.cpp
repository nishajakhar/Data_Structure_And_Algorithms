//Leetcode : 1
// Given an array of integers nums and an integer target, 
// return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, 
// and you may not use the same element twice.

// Example 1:

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Output: Because nums[0] + nums[1] == 9, we return [0, 1].
// Example 2:

// Input: nums = [3,2,4], target = 6
// Output: [1,2]

class Solution {
public:
    vector<int> twoSum(vector<int>& nums, int target) {
        vector<int> result;
        map<int, int> m;
        for(int i=0;i<nums.size();i++){
            int diff = target - nums[i];
            if(m.find(diff) != m.end()) {
                result.push_back(m[diff]);
                result.push_back(i);
                break;
            }
            m[nums[i]] = i;
                       
    }
    return result;
    };
};