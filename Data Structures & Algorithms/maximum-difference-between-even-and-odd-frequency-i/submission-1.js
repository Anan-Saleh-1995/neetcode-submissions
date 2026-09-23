class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    maxDifference(s) {
        const countMap = new Map();
        for (let i = 0; i < s.length; i++) {
            if (!countMap.has(s[i])) {
                countMap.set(s[i], 1);
            } else {
                const currentCount = countMap.get(s[i]);
                countMap.set(s[i], currentCount+1);
            }
        }
        let maxOdd = 0;
        let maxEven = 0;

        countMap.forEach((value, key, map) => {
            if ((value % 2) === 0) {
                maxEven = Math.max(maxEven, value);
            } else {
                maxOdd = Math.max(maxOdd, value);
            }
        })

        return Math.abs(maxOdd - maxEven);
    }
}
