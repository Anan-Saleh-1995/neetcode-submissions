impl Solution {
    pub fn is_palindrome(s: String) -> bool {
        let bytes = s.as_bytes();

        if bytes.is_empty() {
            return true;
        }

        let mut left = 0;
        let mut right = bytes.len() - 1;

        while left < right {
            if !bytes[left].is_ascii_alphanumeric() {
                left += 1;
                continue;
            }

            if !bytes[right].is_ascii_alphanumeric() {
                right -= 1;
                continue;
            }

            if !bytes[left].eq_ignore_ascii_case(&bytes[right]) {
                return false;
            }

            left += 1;
            right -= 1;
        }

        true
    }
}