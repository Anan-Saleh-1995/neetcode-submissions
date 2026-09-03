impl Solution {
    pub fn get_concatenation(nums: Vec<i32>) -> Vec<i32> {
        let original_length = nums.len();
        let expected_length_result = 2 * original_length;
        let mut ans = vec![0; expected_length_result];
        
        let mut i = 0;
        let mut j = 0;
        
        while i < expected_length_result {
            if j == original_length {
                j = 0;
            }
            ans[i] = nums[j];
            i += 1;
            j += 1;
        }
        ans
    }
}
