class Solution {

    /*
        assume you're at root
        toRoot = 0
        atRoot = true
        ./
        toRoot = 0
        atRoot = true
        d21/
        toRoot = 1
        atRoot = false
        ../
        toRoot = 0;
        atRoot = true;
        d2/
        toRoot = 1
        atRoot = false
        d1/
        to root = 1
        atRoot = false

        reverse
        toRoot = 0;
        atRoot = true;
        d1/
        toRoot = 1;
        atRoot = false;
        d2/
        toRoot = 2;
        atRoot = false;
        ../
        toRoot = 1;
        atRoot = false
        d21/
        toRoot = 2;
        atRoot = false
        ./
        toRoot = 2
        atRoot = false

        conculsion = first pop into new array O(N)
        then start applying the toRoot atRoot by defining
        ../ = -1
        ./ = +0
        lowercase english letters and/or digits/ = + 1
        toRoot is all that matters

        so if we make a map, a map like this is useless just if and else

        "../" : -1
        "./" : 0
        else + 1

        so we are looking at O(N) solution
        first loop to pop and place in new arr (or do it in running time no new for new arr)
        two pointers, and replacing
        end with front
        till reaching front < end
        so no need for new memory for new array so its O(N) complexity time wise and O(1) space wise


        then we move into new loop
        using top index

    */

    /*
        two pointers
        left and right technique
        It's O(N) because we are visiting each element once
        in this case we are maniuplating the same array
        so it's O(1) in terms of memory since we are not creating any new O(N) memory
    */
    public void reverseStack(String[] logs) {
        int left = 0;
        int right = logs.length - 1;

        while(left < right) {
            String temp = logs[left];
            logs[left] = logs[right];
            logs[right] = temp;
            left++;
            right--;
        }
    }

    public int minOperations(String[] logs) {
        reverseStack(logs); // Time Complexity O(N) Space Complexity O(1)
        int toRoot = 0;
        for (int i = 0; i < logs.length; i++) { // Time Complexity O(N)
            System.out.println(logs[i]);
            // resource used https://stackoverflow.com/questions/17344312/java-errors-with-unclosed-character-literal-error
            if (logs[i].equals("../")) { // resource used https://stackoverflow.com/questions/513832/how-do-i-compare-strings-in-java
                if (toRoot > 0) {
                    toRoot-=1;
                }
                continue;
            } else if (logs[i].equals("./")) {
                continue;
            } else {
                toRoot+=1;
                continue;
            }
        }

        return toRoot;
    }
}