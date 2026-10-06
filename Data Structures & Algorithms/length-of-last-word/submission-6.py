class Solution:
    def lengthOfLastWord(self, s: str) -> int:
        new_str = s.strip()
        count = 0

        for i in range(len(new_str) - 1, -1, -1):
            if new_str[i] == ' ':
                return count
            else:
                count += 1

        return count
        