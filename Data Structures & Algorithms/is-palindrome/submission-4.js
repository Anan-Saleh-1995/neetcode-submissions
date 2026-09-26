class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        const sNoSpaces = s.replace(" ", "").toLowerCase();
        let left = 0;
        let right = sNoSpaces.length - 1;
        const isAlphaNumeric = (ch) => {
            const charCode = ch.charCodeAt(0);
            if (charCode >= 97 && charCode <= 122) {
                return true;
            }

            if (charCode >= 65 && charCode <= 90) {
                return true;
            }

            if (charCode >= 48 && charCode <= 57) {
                return true;
            }

            return false;
        }
        while(left < right) {

             if (!isAlphaNumeric(sNoSpaces[left])) {
                left++;
            }
            else if (!isAlphaNumeric(sNoSpaces[right])) {
                right--;
            }
            else if (sNoSpaces[left] != sNoSpaces[right]) {
                return false;
            } else {
                left++;
                right--;
            }
            left++;
            right--;
        }
        return true;
    }
}
