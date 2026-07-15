class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLastWord(s: string): number {
        const newStr = s.trim();
        let count = 0;
        for (let i = newStr.length - 1; i >= 0; i--) {
            if (newStr[i] === ' ') {
                return count;
            } else {
                count++;
            }
        }
        return count;
    }
}
