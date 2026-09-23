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
        let maxEven = s.length;

        countMap.forEach((value) => {
            if (value % 2 === 0) {
                maxEven = Math.min(maxEven, value);
            } else {
                maxOdd = Math.max(maxOdd, value);
            }
        });

        return maxOdd - maxEven;
    }
}
