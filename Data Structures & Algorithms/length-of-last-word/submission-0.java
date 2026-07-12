class Solution {
    /*
        references used:
        1) https://medium.com/@azizmarzouki/trim-vs-strip-in-java-9481243db3a7
        2) https://stackoverflow.com/questions/20291307/correct-way-to-trim-a-string-in-java
        3) https://www.baeldung.com/string-trim
        4) https://www.geeksforgeeks.org/java/java-program-to-convert-string-to-string-array/
        5) https://stackoverflow.com/questions/5455794/removing-whitespace-from-strings-in-java
        6) https://stackoverflow.com/questions/52911138/how-to-compare-2-strings-if-they-have-spaces
    */
    public int lengthOfLastWord(String s) {
        String str = s.trim();
        System.out.println("String :" + str);

        String strArray[] = str.split(" ");

        int maxLengthOfWord = strArray[0].length();
        System.out.println("index 0 :" + strArray[0]);
        System.out.println("index 1 :" + strArray[1]);
        // System.out.println("index 2 :" + strArray[3]);
        for (int i = 0; i < strArray.length; i++) {
            // if (strArray[i].contains(" ")) {
            maxLengthOfWord = Math.max(strArray[i].length(), maxLengthOfWord);
            System.out.print(strArray[i] + "\n");
            // }
        }
    return maxLengthOfWord;
    }
}