class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    firstUniqChar(s) {
        const counter = {};

        for (let i = 0 ; i< s.length ; i++) {
            if (!counter[s[i]]) {
                counter[s[i]] = 1;
            } else {
                counter[s[i]]++;
            }
        }

        let maxIndex = -1;
        for (let j = 0; j < s.length; j++) {
            if (counter[s[j]] === 1) {
                maxIndex = j;
                break;
            }
        }

        return maxIndex;
    }
}
