class Solution {
    /**
     * @param {string[]} words
     * @return {string[]}
     */
    stringMatching(words) {
        const set = [];
        for (let i = 0; i < words.length; i++) {
            for (let j = 0; j < words.length; j++) {
                if (i === j) {
                    continue;
                }
                let result = words[j].includes(words[i]);
                if (result) {
                    if (words[i].length < words[j].length) {
                        set.push(words[i]);
                    }
                }
                console.log(result, words[i], words[j]);
            }
        }
        return set;
    }
}
