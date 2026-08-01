class Solution {
    public boolean isValid(String s) {
        /**
        * what does two pointers method tell us here?
        * the last should match the start other wise its not right
        * how to translate that to stack?
        * i pop the first which is the last i save it in a variable
        * i pop the rest into new stack which gives the first
        * and i pop the first and compare
        *
        *
        */
        Stack<Character> st = new Stack<>();
        if (s.length() == 1) {
            return false;
        }
        // Stack<Character> st2 = new Stack<>();

        for (int i = 0; i < s.length(); i++) {
            Character ch = s.charAt(i);
            if (ch == '(' || ch == '{' || ch == '[') {
                st.push(s.charAt(i));
            } else {
                if (st.isEmpty()) {
                    return false;
                }
                Character pop = st.pop();
                if (pop == '(' && ch != ')') {
                    return false;
                } else if (pop == '{' && ch != '}') {
                    return false;
                } else if (pop == '[' && ch != ']') {
                    return false;
                }
            }
        }
        if (!st.isEmpty()) {
            return false;
        }
        return true;
        // while(!st.isEmpty() || !st2.isEmpty()) {
        //     Character last = st.pop();
        //     while (!st.isEmpty()) {
        //         st2.push(st.pop());
        //     }
        //     Character start = st2.pop();
        //     if (last == ')') {
        //         if (start != '('){ 
        //             return false;
        //         }
        //     }
        //     if (last == ']') {
        //         if (start != '['){ 
        //             return false;
        //         }
        //     }
        //     if (last == '}') {
        //         if (start != '{'){ 
        //             return false;
        //         }
        //     }

        //     while (!st2.isEmpty()) {
        //         st.push(st2.pop());
        //     }
        // }
    }
}
