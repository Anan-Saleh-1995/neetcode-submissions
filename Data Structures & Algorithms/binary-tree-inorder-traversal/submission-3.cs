/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     public int val;
 *     public TreeNode left;
 *     public TreeNode right;
 *     public TreeNode(int val=0, TreeNode left=null, TreeNode right=null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */
public class Solution {
    public List<int> InorderTraversal(TreeNode root) {
        var list = new List<int>();

        if (root == null)
        {
            return list;
        }

        if (root.left != null)
        {
            list.AddRange(InorderTraversal(root.left));
        }

        list.Add(root.val);

        if (root.right != null)
        {
            list.AddRange(InorderTraversal(root.right));
        }

        return list;
    }
}