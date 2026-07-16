class Solution {
    public int countSeniors(String[] details) {
        int count = 0;
        for (int i = 0; i < details.length; i++) {
            String str = details[i];
            String age = "" + str.charAt(11) + str.charAt(12);
            int ageInInt = Integer.parseInt(age);
            if (ageInInt > 60) {
                count++;
            }
        }
        return count;
    }
}