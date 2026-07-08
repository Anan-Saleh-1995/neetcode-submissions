/*
Time Complexity: O(n)
Space Complexity: O(n)
*/
/*
It is possible to achievie it with space complexity of O(1)
But depends
if String s and String t were known to be only from a-z then it's possible to use array of size of 26 allocated
if upper case and lower case exists and allowed to do .toLowerCase() then do on both and avoid size of 128
if any unicode characters then user solution below

*/
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
