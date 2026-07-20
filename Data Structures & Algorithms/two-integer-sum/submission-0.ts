class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        const map = new Map<number, number>();
        let result = [];
        for (let i = 0; i < nums.length; i++) {
            // const remains = target - nums[i]; theres a soltuin better than mine with this at start
            if (map.has(nums[i])) {
                result = [map.get(nums[i]), i];
                break;
            } else {
                const remains = target - nums[i];
                map.set(remains, i);
            }
        }
        return result;
    }
}
