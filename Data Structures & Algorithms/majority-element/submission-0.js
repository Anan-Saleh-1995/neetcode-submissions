class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    majorityElement(nums) {
        const map = new Map();
        // let majorityElement = -1;
        // let majorityElementKey = -1;
        // const max = 1_000_000_000;
        // const majorityElementCounterPos = new Array(max).fill(1);
        // const majorityElementCounterNeg = new Array(-1 * max).fill(1);
        // console.log(majorityElementCounterPos);
        // console.log(majorityElementCounterNeg);

        // console.log(arr);
        for (let i = 0; i < nums.length; i++) {
            map.set(nums[i], (map.get(nums[i]) ?? 1) + 1);
        }

        let majorityElement = -1;
        let majorityElementKey = -1;
        map.forEach((value, key) => {
            if (value > majorityElement) {
                majorityElement = value;
                majorityElementKey = key;
            }
        });
        return majorityElementKey;
    }
}
