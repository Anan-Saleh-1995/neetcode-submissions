class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        if (nums.length === 0) {
            console.log(nums);
            return -1;
        }
        if (nums.length === 1) {
            if (nums[0] === target) {
                return target;
            } else {
                return -1;
            }
        }
        let left = 0;
        let right = nums.length;
        while(left < right) {
            let middle = Math.trunc(left + (right - left) / 2);

            if (nums[middle] === target) {
                return middle;
            }
            if (nums[middle] < target) {
                left = middle + 1;
            } else if (nums[middle] > target) {
                right = middle - 1;
            }
        }
        return -1;
        // let middle = Math.trunc(nums.length / 2);
        // while(middle > 0 || middle < nums.length - 1) {
            // if (target > nums[middle]) {
            //     left = middle;
            //     middle = Math.trunc((left + right) / 2);
            //     console.log(left, right, middle)
            // } else if (target < nums[middle]) {
            //     right = middle - 1;
            //     middle = Math.trunc((left + right) / 2);
            //     console.log(left, right, middle)
            // } else {
            //     return middle;
            // }
        // }
        // if (middle === 0) {
        //     return nums[middle];
        // } else if (middle === nums.length - 1) {
        //     return nums[nums.length - 1]
        // }
        // console.log(middle);
        // search(nums, target);

    }
}
