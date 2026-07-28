class Solution {
    public int appendCharacters(String s, String t) {
        int nextCharIndex = 0;
        for (int i = 0; i < s.length(); i++) {
            if (nextCharIndex == t.length()) {
                break;
            }
            if (s.charAt(i) == t.charAt(nextCharIndex)) {
                nextCharIndex++;
            }
        }

        if (nextCharIndex == t.length()) {
            return 0;
        }
        
        return t.length() - nextCharIndex;
    }
}