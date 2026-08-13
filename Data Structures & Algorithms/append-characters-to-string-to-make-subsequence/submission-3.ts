class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {number}
     */
    appendCharacters(s: string, t: string): number {
        let str = "";
        let nextCharIndex = 0;
        for (let i = 0; i < s.length; i++) {
            if (s[i] !== t[nextCharIndex]) {
                continue;
            }
            str+=s[i];
            nextCharIndex++;
        }
        if (str === t) { 
            return 0;
        }
        let appendStr = "";
        for (let j = nextCharIndex; j < t.length; j++) {
            appendStr+=t[j];
        }

        return appendStr.length;
    }
}
