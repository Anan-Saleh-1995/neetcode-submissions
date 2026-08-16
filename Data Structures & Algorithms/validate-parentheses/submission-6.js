class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const st = [];
        if (s.length == 1) {
            return false;
        }

        for (let i = 0; i < s.length; i++) {
            let ch = s.charAt(i);
            if (ch === '(' || ch === '{' || ch === '[') {
                st.push(s.charAt(i));
            } else {
                if (st.length === 0) {
                    return false;
                }
                let pop = st.pop();
                if (pop == '(' && ch != ')') {
                    return false;
                } else if (pop == '{' && ch != '}') {
                    return false;
                } else if (pop == '[' && ch != ']') {
                    return false;
                }
            }
        }
        if (!Boolean(st.length === 0)) {
            return false;
        }
        return true;}
}
