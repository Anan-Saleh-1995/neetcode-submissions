class Solution:
    def firstUniqChar(self, s: str) -> int:
        counter = {}

        for i in range(len(s)):
            if s[i] not in counter:
                counter[s[i]] = 1
            else:
                counter[s[i]] += 1

        max_index = -1

        for j in range(len(s)):
            if counter[s[j]] == 1:
                max_index = j
                break

        return max_index