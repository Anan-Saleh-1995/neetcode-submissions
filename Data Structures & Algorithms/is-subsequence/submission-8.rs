impl Solution {
    pub fn is_subsequence(s: String, t: String) -> bool {
        let s = s.as_bytes();
        let t = t.as_bytes();

        let mut next_char_index = 0;

        for i in 0..t.len() {
            if next_char_index == s.len() {
                break;
            }

            if t[i] == s[next_char_index] {
                next_char_index += 1;
            }
        }

        next_char_index == s.len()
    }
}
