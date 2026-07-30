class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */

    /**
     * 
     *         int nextCharIndex = 0;
        for (int i = 0; i < s.length(); i++) {
            if (nextCharIndex == t.length()) {
                break;
            }
            if (s.charAt(i) == t.charAt(nextCharIndex)) {
                nextCharIndex++;
            }
        }
     * 
     */
    isSubsequence(s: string, t: string): boolean {
        let nextCharIndex: number = 0;
        for (let i: number = 0; i < t.length; i++) {
            if (nextCharIndex === s.length) {
                break;
            }

            if (t.charAt(i) === s.charAt(nextCharIndex)) {
                nextCharIndex++;
            }
        }

        if (nextCharIndex === s.length) {
            return true;
        }
        return false;
    }
}
