class Solution {
    /*
        references used:
        1) https://medium.com/@azizmarzouki/trim-vs-strip-in-java-9481243db3a7
        2) https://stackoverflow.com/questions/20291307/correct-way-to-trim-a-string-in-java
        3) https://www.baeldung.com/string-trim
        4) https://www.geeksforgeeks.org/java/java-program-to-convert-string-to-string-array/
        5) https://stackoverflow.com/questions/5455794/removing-whitespace-from-strings-in-java
        6) https://stackoverflow.com/questions/52911138/how-to-compare-2-strings-if-they-have-spaces


        my solution on typescript

        const newStr = s.trim();
        let count = 0;
        for (let i = newStr.length - 1; i >= 0; i--) {
            if (newStr[i] === ' ') {
                return count;
            } else {
                count++;
            }
        }
        return count;
    */
    public int lengthOfLastWord(String s) {
        String newStr = s.trim();
        int count = 0;
        for (int i = newStr.length() - 1; i >= 0; i--) {
            if (newStr.charAt(i) == ' ') {
                return count;
            } else {
                count++;
            }
        }
        return count;
    }
}