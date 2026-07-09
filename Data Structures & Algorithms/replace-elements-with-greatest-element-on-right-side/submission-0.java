class Solution {
    /*
        space complexity O(1)
        time complexity O(N^2)

        New word learned: Traversing
        New way of thinking learned: try going from right to left or thinking about it

        by going right to left i can perceive the maximum and remember it and then making it one run at the array

        this results in 
        space complexity of O(1)
        time complexity of O(N)

        note: remember to use Math library
        
    */
    private int findMax(int start, int[] arr) {
        int max = arr[start];
        for (int i = start + 1; i < arr.length; i++) {
            if (arr[i] > max) { /* I can use Math.max here */
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
