class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    firstMissingPositive(nums) {
        let prevMax = nums[0];
        let currentMax = nums[0];
        let nextMax = nums[0];
        let memory = new Array(3).fill(0);

        if (nums.length === 1) {
            return max + 1;
        }
        // if (nums.length === 2) {
        // if (nums[0] < 0) {
        //     return 1;
        // }

        // if (nums[1] < 0) {
        //     return 1;
        // }

        // if (nums[0] === 0) {
        //     return 1;
        // }
        // if (nums[1] === 0) {
        //     return 1;
        // }

        //     return 1;
        // }

        // im thinking about prev max current max and next max
        // the problem next max is unknown

        for (let i = 1; i < nums.length; i++) {
            if (nums[i] > currentMax) {
                prevMax = currentMax;
                currentMax = nums[i];
            }
        }

        if (prevMax < 0) {
            return 1;
        }

        if (currentMax < 0) {
            return 1;
        }

        if (prevMax === 0) {
            return 1;
        }

        if (currentMax === 0) {
            return 1;
        }

        let foundNextMax = false;
        let prevPrevMax = false;
        let min = nums[0];
        for (let i = 0; i < nums.length; i++) {
            if (nums[i] > currentMax) {
                foundNextMax = true;
            }
            if (nums[i] < min) {
                min = nums[i];
            }
            if (nums[i] === (prevMax - 1)) {
                prevPrevMax = true;
            }

        }

        if (foundNextMax) {
            return prevMax - 1;
        }

        if (currentMax - min === 1) {
            return 1;
        }
        if (currentMax - prevMax > 1) {
            return prevMax + 1;
        }
        if (prevPrevMax) {
            return currentMax + 1;
        }

    }
}
