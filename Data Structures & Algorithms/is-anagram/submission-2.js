class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length != t.length) {
            return false;
        }
        const counter = new Map();
        for (let i = 0; i < s.length; i++) {
            const c = s.charAt(i);
            if (counter.has(c)) {
                counter.set(c, counter.get(c) + 1);
            } else {
                counter.set(c, 1);
            }
        }

        for (let j = 0; j < t.length; j++) {
            const c = t.charAt(j);
            if (counter.has(c)) {
                if (counter.get(c) - 1 < 0) {
                    return false;
                }
                counter.set(c, counter.get(c) - 1);
            } else {
                return false;
            }
        }
        return true;
    }
}
