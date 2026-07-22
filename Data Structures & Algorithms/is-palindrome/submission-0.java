class Solution {
    public boolean isPalindrome(String s) {
        int left = 0;
        int right = s.length() - 1;
        String sNoSpaces = s.replace(" ", ""); //source: https://www.geeksforgeeks.org/dsa/remove-spaces-from-a-given-string/
        while(left > right) {
            System.out.println(s[left], s[right]);
            left++;
            right++;
        }
    }
}
