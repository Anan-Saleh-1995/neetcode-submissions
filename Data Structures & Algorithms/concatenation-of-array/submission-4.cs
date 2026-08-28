public class Solution {
    public int[] GetConcatenation(int[] nums) {
        int originalLength = nums.Length;
        int expectedLengthResult = 2 * originalLength;
        int[] ans = new int[expectedLengthResult];
        Array.Fill(ans, 0);
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