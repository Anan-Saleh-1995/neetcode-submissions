class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    firstMissingPositive(nums) {
        let prevMax = nums[0];
        let currentMax = nums[0];

        if (nums.length === 1) {
            // CHANGED:
            // Any single value other than 1 means 1 is missing.
            return nums[0] === 1 ? 2 : 1;
        }

        /*
         * Your first loop remains.
         *
         * It discovers currentMax.
         */
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

        // ADDED:
        // Remember which positive numbers actually exist.
        const foundNumbers = new Set();

        /*
         * Your second loop remains.
         */
        for (let i = 0; i < nums.length; i++) {
            if (nums[i] === 1) {
                foundOne = true;
            }

            // ADDED
            if (nums[i] > 0) {
                foundNumbers.add(nums[i]);
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

        /*
         * Your first invariant remains:
         * if 1 is absent, it must be the answer.
         */
        if (!foundOne) {
            return 1;
        }

        /*
         * CHANGED:
         *
         * Instead of guessing from min, prevMax and currentMax,
         * check every candidate between 2 and currentMax.
         */
        for (let candidate = 2; candidate <= currentMax; candidate++) {
            if (!foundNumbers.has(candidate)) {
                return candidate;
            }
        }

        /*
         * We proved every number from 1 through currentMax exists.
         */
        return currentMax + 1;
    }
}