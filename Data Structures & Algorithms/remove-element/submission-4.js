class Solution {
    /**
     * @param {number[]} nums
     * @param {number} val
     * @return {number}
     */
    removeElement(nums, val) {
        if (nums.length === 0) {
            return 0;
        }
        if (nums.length === 1) {
            if (nums[0] === val) {
                return 0;
            }
            return 1;
        }
        let right = nums.length - 1;
        let left = 0;
        let k = 0;
        while (right > left) {
            if (nums[left] === val) {
                if (nums[right] !== val) {
                    nums[left++] = nums[right]
                }
                right--;
            } else {
                left++;
            }
            k++;
        }
        console.log(k)
        return k;
    }
}
