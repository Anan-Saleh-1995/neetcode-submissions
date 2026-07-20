class Solution {
    /*
        map.containsKey(Key)
        map.put(key, value)
        map.get(key)
    */
    public int[] twoSum(int[] nums, int target) {
        Map<Integer, Integer> seen = new HashMap<Integer, Integer>();
        int[] result = new int[2];
        for (int i = 0; i < nums.length; i++) {
            int remains = target - nums[i];
            if (seen.containsKey(remains)) {
                int num = seen.get(remains);
                result[0] = num;
                result[1] = i;
                break;
            }
            seen.put(nums[i], i);
        }
        return result;
    }
}
