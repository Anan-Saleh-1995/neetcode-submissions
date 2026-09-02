class Solution {
    public int[] getConcatenation(int[] nums) {
        int originalLength = nums.length;
        int expectedLengthResult = 2 * originalLength;
        int[] ans = new int[expectedLengthResult];
        int i = 0;
        int j = 0;
        while(i < expectedLengthResult) {
            if (j == originalLength) {
                j = 0;
            }
            ans[i++] = nums[j++];
        }
        return ans;
    }
}