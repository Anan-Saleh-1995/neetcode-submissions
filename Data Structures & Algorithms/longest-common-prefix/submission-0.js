class Solution {
    /**
     * @param {string[]} strs
     * @return {string}
     */
    longestCommonPrefix(strs) {
        const map = {};
        for (let i = 0; i < strs.length; i++) {
            let word = strs[i][0];
            if (map[word]) {
                map[word]++;
            } else {
                map[word] = 1;
            }
            for(let j = 1; j < strs[i].length; j++) {
                word = word + strs[i][j];
                if (map[word]) {
                map[word]++;
                } else {
                map[word] = 1;
                }
            }
        }
        const keys = Object.keys(map);
        let longestCommonPrefix = "";
        for (let i = 0; i < keys.length; i++) {
            if(keys[i].length > longestCommonPrefix.length) {
                if(map[keys[i]] === strs.length) { // chatgpt helped me here after i gave up
                    longestCommonPrefix = keys[i];
                }
            }
        }
        return longestCommonPrefix;
    }
}
