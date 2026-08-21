public class Solution {
    public bool IsArraySpecial(int[] nums) {
        if (nums.Length == 1) {
            return true;
        }

        if (nums.Length % 2 == 0) {
            if ((nums[0] % 2 == 0) && !(nums[nums.Length - 1] % 2 == 1)) {
                return false;
            }
            if ((nums[0] % 2 == 1) && !(nums[nums.Length - 1] % 2 == 0)) {
                return false;
            }
        }

        if (nums.Length % 2 == 1) {
            if ((nums[0] % 2 == 0) && (!(nums[nums.Length - 1] % 2 == 0))) {
                return false;
            }
            if ((nums[0] % 2 == 1) && !(nums[nums.Length - 1] % 2 == 1)) {
                return false;
            }
        }

        int left = 1;
        int right = nums.Length - 2;
        bool isEven = nums.Length % 2 == 0;

        while(left < right) {
            int[] arr = {nums[left], nums[right]};
            if (isEven) {
                if ((arr[0] % 2 == 0) && !(arr[arr.Length - 1] % 2 == 1)) {
                    return false;
                }
                if ((arr[0] % 2 == 1) && !(arr[arr.Length - 1] % 2 == 0)) {
                    return false;
                }
            }

            if (!isEven) {
                if (arr[0] % 2 == 0 && arr[arr.Length - 1] % 2 == 0) {
                    return false;
                }
                if (arr[0] % 2 == 1 && arr[arr.Length - 1] % 2 == 1) {
                    return false;
                }
            }
            left++;
            right--;
        }
        return true;
    }
}