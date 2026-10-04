/**
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * function guess(num) {}
 */

class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    guessNumber(n) {
        let left = 0;
        let right = n;

        while(left <= right) {
            let middle = left + Math.trunc((right - left) / 2);
            let pick = guess(middle);
            if (pick === 0) {
                return middle;
            }
            if (pick === -1) {
                right--;
            }
            if (pick === 1) {
                left++;
            }
        }
    }
}
