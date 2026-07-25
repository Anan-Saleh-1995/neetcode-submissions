class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    singleNonDuplicate(nums) {
        let count = 0;
        if (nums.length === 1) {
            return nums[0];
        }
        for (let i = 0; i < nums.length; i++) { // O(N) solution
            if (i === 0) {
                count++;
                continue;
            }
            if (nums[i - 1] === nums[i]) {
                count++;
                continue;
            } else {
                if (count === 1) {
                    return nums[i-1];
                }
                count = 1;
            }
        }
        return nums[nums.length - 1];
    }
}
