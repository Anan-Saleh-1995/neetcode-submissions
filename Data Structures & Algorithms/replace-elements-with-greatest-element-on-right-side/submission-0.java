class Solution {
    /*
        space complexity O(1)
        time complexity O(N^2)
    */
    private int findMax(int start, int[] arr) {
        int max = arr[start];
        for (int i = start + 1; i < arr.length; i++) {
            if (arr[i] > max) {
                max = arr[i];
            }
        }
        return max;
    }
    public int[] replaceElements(int[] arr) {
        int maxTest = findMax(0, arr);
        for (int i = 0; i < arr.length - 1; i++) {
            int max = findMax(i + 1, arr);
            arr[i] = max;
        }
        arr[arr.length - 1] = -1;
        return arr;
    }
}