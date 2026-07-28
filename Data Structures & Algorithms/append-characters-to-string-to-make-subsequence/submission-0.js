class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {number}
     */
    appendCharacters(s, t) {
        let str = "";
        let nextCharIndex = 0;
        for (let i = 0; i < s.length; i++) { // checks if t is already a subsequence of s
            if (s[i] !== t[nextCharIndex]) {
                continue;
            }
            str+=s[i];
            nextCharIndex++;
        }
        if (str === t) { // try to use string methods for accuracy and other coding languages lower levels
            return 0;
        }
        let appendStr = "";
        for (let j = nextCharIndex; j < t.length; j++) {
            appendStr+=t[j];
        }
        console.log(nextCharIndex);
        console.log(str);

        return appendStr.length;

    }
}
