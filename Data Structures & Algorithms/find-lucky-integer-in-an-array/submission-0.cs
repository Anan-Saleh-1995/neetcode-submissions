public class Solution {
    public int FindLucky(int[] arr) {
        var obj = new Dictionary<int, int>();

        for (int i = 0; i < arr.Length; i++) {
            if (obj.ContainsKey(arr[i])) {
                obj[arr[i]]++;
            } else {
                obj[arr[i]] = 1;
            }
        }

        int max = -1;
        foreach (var (key, value) in obj) {
            if (key == value && value > max) {
                max = value;
            }
        }

        return max;
    }
}