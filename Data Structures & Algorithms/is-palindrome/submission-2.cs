public class Solution {
    public bool IsPalindrome(string s) {
        string sNoSpaces = s.Replace(" ", "").ToLower();

        int left = 0;
        int right = sNoSpaces.Length - 1;

        while (left < right)
        {
            if (!char.IsLetterOrDigit(sNoSpaces[left]))
            {
                left++;
            }
            else if (!char.IsLetterOrDigit(sNoSpaces[right]))
            {
                right--;
            }
            else if (sNoSpaces[left] != sNoSpaces[right])
            {
                return false;
            }
            else
            {
                left++;
                right--;
            }
        }
        return true;
    }
}
