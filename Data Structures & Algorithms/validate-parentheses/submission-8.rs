impl Solution {
    pub fn is_valid(s: String) -> bool {
        // vector as in dynamic array
        let mut stack = Vec::new();

        for ch in s.chars() {
            match ch {
                '(' => stack.push(')'),
                '{' => stack.push('}'),
                '[' => stack.push(']'),

                ')' | '}' | ']' => { // if ch matches the closed brackets
                    if stack.pop() != Some(ch) {
                        return false;
                    }
                },
                // anything else
                _ => {},
            }
        }
        stack.is_empty()
    }
}
