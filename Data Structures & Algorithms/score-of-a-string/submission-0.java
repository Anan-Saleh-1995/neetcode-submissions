class Solution {
    /*
        references i used
        https://www.ascii-code.com/characters/a-z
        https://www.geeksforgeeks.org/java/system-out-println-in-java/
        https://www.w3schools.com/java/ref_string_charat.asp
    */
    public int scoreOfString(String s) {
        if (s.length() < 2 || s.length() > 100) {
            return 0;
        }
        int max = 0;
        for (int i = 0; i < s.length() - 1; i++) {
            char c1 = s.charAt(i);
            char c2 = s.charAt(i + 1);
            max = max + (Math.abs(c2 - c1));
        }
        return max;
    }
}