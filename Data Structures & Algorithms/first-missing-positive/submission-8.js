class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    firstMissingPositive(nums) {
        let prevMax = nums[0];
        let currentMax = nums[0];

        if (nums.length === 1) {
            return nums[i] === 1 ? nums[i] + 1 : nums[i] - 1;
        }
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
        let foundPrevPrevMax = false;
        let prevPrevMaxIndex = 0;
        let foundOne = false;
        let min = nums[0];
        for (let i = 0; i < nums.length; i++) {
            if (nums[i] === 1) {
                foundOne = true;
            }
            if (nums[i] > currentMax) {
                foundNextMax = true;
            }
            if (prevMax - nums[i] === 1) {
                foundPrevPrevMax = true;
                prevPrevMaxIndex = i;
            }
            if (nums[i] >= 0 && nums[i] < min) {
                min = nums[i];
            }
        }

        if (!foundOne) {
            return 1;
        }
        if (foundNextMax) {
            return prevMax - 1;
        }

        if (currentMax - min === 1) {
            return 1;
        }

        if (foundPrevPrevMax) {
            if (currentMax - prevMax > 1) {
                return prevMax + 1;
            }
            if (!foundNextMax && currentMax - prevMax === 1) {
                return currentMax + 1
            }
            return currentMax + 1;
        }

        if (prevMax - min > 1) {
            return min + 1;
        }

        if (currentMax - prevMax > 1) {
            return prevMax + 1;
        }

    }
}
