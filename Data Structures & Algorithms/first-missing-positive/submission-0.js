class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    firstMissingPositive(nums) {
        let prev = 0;
        let current = 0;
        let next = 0;
        let max = nums[0];

        if (nums.length === 1) {
            return max + 1;
        }

        if (nums[0] < 0) {
            return 1;
        }

        if (nums[1] < 0) {
            return 1;
        }

        if (nums[0] === 0) {
            return 1;
        }
        if (nums[1] === 0) {
            return 1;
        }

        if (nums[0] === 1 && nums[1] === 1) {
            return 2;
        }
        return 1;


        // if (nums.length === 2) {
        //     if (nums[0] === nums[1]) {
        //         return nums[0] + 1;
        //     }
        //     if (nums[0] > nums[1]) {
        //         if (nums[0] === 0) {
        //             return 1;
        //         }
        //         if (Math.abs(Math.abs(nums[0]) - Math.abs(nums[1])) === 1) {
        //             if (nums[0] + 1 === 0) {
        //                 return Math.abs(nums[0]);
        //             }
        //             return nums[0] + 1;
        //         } else {
        //             return nums[0] - 1;
        //         }
        //     } else {
        //         if (nums[0] < 0) {
        //             return nums[1] - 1;
        //         }
        //         if (Math.abs(Math.abs(nums[1]) - Math.abs(nums[0])) === 1) {
        //             return nums[1] + 1;
        //         } else {
        //             return nums[1] - 1;
        //         }
        //     }
        // }
    }
}
