public class Solution {
    public bool IsSubsequence(string s, string t) {
        int nextCharIndex = 0;
        for (int i = 0; i < t.Length; i++) {
            if (nextCharIndex == s.Length) {
                break;
            }

            if (t[i] == s[nextCharIndex]) {
                nextCharIndex++;
            }
        }

        if (nextCharIndex == s.Length) {
            return true;
        }
        return false;
    }
}