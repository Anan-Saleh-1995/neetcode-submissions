class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s: string): boolean {
        //const stack = new Stack < number > ();
        const st = [];
        if (s.length == 1) {
            return false;
        }
        // Stack<Character> st2 = new Stack<>();

        for (let i: number = 0; i < s.length; i++) {
            let ch:string = s.charAt(i);
            if (ch === '(' || ch === '{' || ch === '[') {
                st.push(s.charAt(i));
            } else {
                if (st.length === 0) {
                    return false;
                }
                let pop:string = st.pop();
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
        return true;
    }
}
