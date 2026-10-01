public class Solution {
    public int FirstUniqChar(string s) {
        var counter = new Dictionary<char, int>();

        for (int i = 0; i < s.Length; i++) {
            if (!counter.ContainsKey(s[i])) {
                counter[s[i]] = 1;
            }
            else {
                counter[s[i]]++;
            }
        }

        int maxIndex = -1;

        for (int j = 0; j < s.Length; j++) {
            if (counter[s[j]] == 1) {
                maxIndex = j;
                break;
            }
        }

        return maxIndex;
    }
}