/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */
class Solution {
    /**
     * @param {TreeNode} root
     * @return {number[]}
     */
    inorderTraversal(root: TreeNode | null): number[] {
        // go as deep as u can on the left
        // if no deeper print
        // go back
        // go as deep as u can on the right
        // if no deeper print
        // then go back and print
        // then go back and print
        // then go as deep as u can on the right
       const list = [];
        if (root == null) {
            return list;
        }
        if (root.left != null) {
            list.push(this.inorderTraversal(root.left));
        }
        list.push(root.val);
        if (root.right != null) {
            list.push(this.inorderTraversal(root.right)); 
        } 
        return list;

    }
}
