public class Solution {
    public bool IsAnagram(string s, string t) {
        if (s.Length != t.Length) {
            return false;
        }
        var counter = new Dictionary<char, int>();
        for (int i = 0; i < s.Length; i++) {
            char c = s[i];
            if (counter.ContainsKey(c)) {
                counter[c] = counter[c] + 1;
            } else {
                counter[c] = 1;
            }
        }

        for (int j = 0; j < t.Length; j++) {
            char c = t[j];
            if (counter.ContainsKey(c)) {
                if (counter[c] - 1 < 0) {
                    return false;
                }
                counter[c] = counter[c] - 1;
            } else {
                return false;
            }
        }
        return true;
    }
}
