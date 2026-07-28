class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {number}
     */
    /**
    * after discussing this with chatgpt it turns out i can do this in a better way
    * it is possible that i do it in one loop, and nextCharIndex can be used
    * for example t.length - nextCharIndex
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
        // here we can do nextCharIndex === t.length return 0
        if (str === t) { // try to use string methods for accuracy and other coding languages lower levels
            return 0;
        }
        let appendStr = "";
        for (let j = nextCharIndex; j < t.length; j++) {
            appendStr+=t[j];
        }
        console.log(nextCharIndex);
        console.log(str);

        return appendStr.length; // and here instead of that second loop we can do return t.length - nextCharIndex

    }
}
