public class Solution {
    public int LengthOfLastWord(string s) {
        string newStr = s.Trim();
        int count = 0;
        for (int i = newStr.Length - 1; i >= 0; i--) {
            if (newStr[i] == ' ') {
                return count;
            } else {
                count++;
            }
        }
        return count;
    }
}