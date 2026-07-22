class Solution {
    public boolean isPalindrome(String s) {
        // int left = 0;
        // int right = s.length() - 1;
        // System.out.println(right);
        
        // complexity of s.replace = time is O(N), space is O(N) maybe ?
        // complexity of toLowerCase = time is O(N), space is O(N) maybe ?
        // in total it's O(N) time and O(N) space? because its addition not power by
        String sNoSpaces = s.replace(" ", "").toLowerCase(); //source: https://www.geeksforgeeks.org/dsa/remove-spaces-from-a-given-string/   https://www.w3schools.com/java/ref_string_tolowercase.asp
        int left = 0; // O(1) space
        int right = sNoSpaces.length() - 1; // O(N) to count all lettrs? O(1) space? 
        System.out.println(sNoSpaces);
        /**
          how to skip all non alphanumeric letters and numbers?
          if one letter is not alpha numberic or numbers we break repeat with either left ++ or right --

          found the source at 
          https://examples.javacodegeeks.com/string-contains-non-alphanumeric-characters-in-java/
        */
        while(left < right) { // O(N) because we are visiting each character at least once? O(1) space?
            /**if (!Character.isLetterOrDigit(sNoSpaces.charAt(right))) { // https://examples.javacodegeeks.com/string-contains-non-alphanumeric-characters-in-java/
                System.out.println(sNoSpaces.charAt(right));
            }**/
            if (!Character.isLetterOrDigit(sNoSpaces.charAt(left))) {
                left++;
            } else if (!Character.isLetterOrDigit(sNoSpaces.charAt(right))) {
                right--;
            } else if (sNoSpaces.charAt(left) != sNoSpaces.charAt(right)) {
                return false;
            } else {
                left++;
                right--;
            }
        }
        return true;
    }
}
