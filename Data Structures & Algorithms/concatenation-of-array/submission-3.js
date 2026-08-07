class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    getConcatenation(nums) {
        const originalLength = nums.length;
        const expectedLengthResult = 2 * originalLength;
        let ans = new Array(expectedLengthResult).fill(0);
        let i = 0;
        let j = 0;
        while(i < expectedLengthResult) {
            if (j === originalLength) {
                j = 0;
            }
            ans[i++] = nums[j++]
        }
        return ans;
    }
}
