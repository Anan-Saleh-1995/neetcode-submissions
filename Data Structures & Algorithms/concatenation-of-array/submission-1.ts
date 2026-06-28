class Solution {
    getConcatenation(nums: number[]): number[] {
        // this about it like this
        /**
            ans[i] = nums[i];
            ans[i + originalLength] = nums[i];

            nums = [1, 2, 3, 4]
            
            ans[0] = num[0] -> 1
            ans[4] = nums[0] -> 1

            gradually it concatenate the array into two
            ans[1] = nums[1] -> 2
            ans[5] = nums[1] -> 2
            
            ans[2] = nums[2] -> 3
            ans[6] = nums[2] -> 3

            ans[3] = nums[3] -> 4
            ans[8] = nums[3] -> 4

        */
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
        return ans;
    }
}
