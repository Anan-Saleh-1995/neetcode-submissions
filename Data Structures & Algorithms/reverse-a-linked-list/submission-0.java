/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode() {}
 *     ListNode(int val) { this.val = val; }
 *     ListNode(int val, ListNode next) { this.val = val; this.next = next; }
 * }
 */

class Solution {
    private ListNode reversedTail; // chatgpt helped me
    private void printListNodeReverse(ListNode head, ListNode reversedHead) {
        // if (head.next != null) {
        //     length = length + 1;
        //     System.out.println(" this is not null ");
        // }
        // if (head.next.next.next == null) {
        //     System.out.println(" this is null ");
        // }
        // return head.next.next.val;
        if (head == null) {
            return;
        }
        printListNodeReverse(head.next, reversedHead);
        System.out.println("val = " + head.val);
        // if (reversedHead.val == 0) {
        //     reversedHead.val = head.val;
        // }
        // System.out.println("val = " + reversedHead.val);

        // chatgpt helped me 
        if (reversedTail == null) {
            reversedHead.val = head.val;
            reversedTail = reversedHead;
        } else {
            reversedTail.next = new ListNode(head.val);
            reversedTail = reversedTail.next;
        }
    }
    public ListNode reverseList(ListNode head) {
        /**
            having hard time with knowing if head is empty
            if head has value and no next
            it means its one [val] so i return it
            if head has no value and no next
            it means its [] so i return it

            other than that i start counting from 1 and
            head.next

            then i get the length from recursion
            lets say its 4
            
            then i attempt to make new ListNode from the end

            for (int i = length - 1; i >= length; i--) {
             yes but here theres no like arr[i]
            }

        */
        // System.out.println("" + head.val);
        if (head == null || head.next == null) { // first successful step alone
            return head;
        }
        int length = 1;
        // System.out.println("" + countLength(head));
        // printListNodeReverse(head); // second successful step alone
        reversedTail = null; // chatgpt helped me
        ListNode reversedHead = new ListNode();
        printListNodeReverse(head, reversedHead); // chatgpt helped me
        return reversedHead;
    }
}
