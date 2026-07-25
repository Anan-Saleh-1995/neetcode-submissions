class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    searchInsert(nums, target) {
        let left = 0;
        let right = nums.length - 1;
        while(left <= right) {
            let middle = left + Math.trunc((right - left) / 2);
            if (nums[middle] === target) {
                return middle;
            }
            if (nums[middle] < target) {
                left = middle + 1;
            } else if (nums[middle] > target) {
                right = middle - 1;
            }
        }
        return left;
    }
}
