class Solution {
    getConcatenation(nums: number[]): number[] {
        const originalLength = nums.length;
        const expectedLengthResult = 2 * originalLength;
        let ans: number[] = new Array(expectedLengthResult).fill(0);
        let i = 0;
        let j = 0;
        while(i < expectedLengthResult) {
            if (j === originalLength) {
                j = 0;
            }
            ans[i++] = nums[j++]
        }
        console.log(ans)
        return ans;

    }
}
