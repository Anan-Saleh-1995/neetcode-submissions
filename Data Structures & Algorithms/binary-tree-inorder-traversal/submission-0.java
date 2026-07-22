/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode() {}
 *     TreeNode(int val) { this.val = val; }
 *     TreeNode(int val, TreeNode left, TreeNode right) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */
class Solution {
    public List<Integer> inorderTraversal(TreeNode root) {
        // source https://stackoverflow.com/questions/18021218/create-a-list-of-primitive-int
        List<Integer> list = new ArrayList<Integer>();
        if (root == null) {
            return list;
        }
        if (root.left != null) {
            list.addAll(inorderTraversal(root.left)); //chatgpt helped me explaining why return here is wrong for recurison
        }
        list.add(root.val); // chagpt helepd me understand the postorder inorder and preorder
        System.out.println(root.val);
        if (root.right != null) {
            list.addAll(inorderTraversal(root.right)); //chatgpt helped me explaining why return here is wrong for recurison
        } 
        return list;
    }
}