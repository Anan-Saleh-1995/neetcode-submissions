class Solution {
    public boolean isAnagram(String s, String t) {
        if (s.length() != t.length()) {
            return false;
        }
        Map<Character, Integer> counter = new HashMap<Character, Integer>();
        for (int i = 0; i < s.length(); i++) {
            char c = s.charAt(i);
            if (counter.containsKey(c)) {
                counter.put(c, counter.get(c) + 1);
            } else {
                counter.put(c, 1);
            }
        }

        for (int j = 0; j < t.length(); j++) {
            char c = t.charAt(j);
            if (counter.containsKey(c)) {
                if (counter.get(c) - 1 < 0) {
                    return false;
                }
                counter.put(c, counter.get(c) - 1);
            } else {
                return false;
            }
        }
        return true;
    }
}
