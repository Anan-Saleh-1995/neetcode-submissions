class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    findErrorNums(nums) {
        for (let i = 0; i < nums.length; i++) {
            if ((i + 1) < nums.length) {
                if (nums[i] === nums[i + 1]) {
                    return [nums[i], i + 2];
                }
            }
        }
    }
}
