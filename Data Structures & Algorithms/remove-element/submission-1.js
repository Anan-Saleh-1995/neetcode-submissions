class Solution {
    /**
     * @param {number[]} nums
     * @param {number} val
     * @return {number}
     */
    removeElement(nums, val) {
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
            console.log(k);
        if (nums.length % 2 !== 0) {
            k++;
        }
        return k;
    }
}
