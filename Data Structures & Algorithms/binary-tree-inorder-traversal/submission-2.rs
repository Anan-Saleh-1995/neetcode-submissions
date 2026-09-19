// Definition for a binary tree node.
// #[derive(Debug, PartialEq, Eq)]
// pub struct TreeNode {
//     pub val: i32,
//     pub left: Option<Rc<RefCell<TreeNode>>>,
//     pub right: Option<Rc<RefCell<TreeNode>>>,
// }
//
// impl TreeNode {
//     #[inline]
//     pub fn new(val: i32) -> Self {
//         TreeNode {
//             val,
//             left: None,
//             right: None,
//         }
//     }
// }

use std::rc::Rc;
use std::cell::RefCell;

impl Solution {
    pub fn inorder_traversal(root: Option<Rc<RefCell<TreeNode>>>) -> Vec<i32> {
        let mut list = Vec::new();

        if let Some(root) = root {
            let node = root.borrow();

            let left_list = Self::inorder_traversal(node.left.clone());

            list.extend(left_list);
            list.push(node.val);
            let right_list = Self::inorder_traversal(node.right.clone());
            list.extend(right_list);
        }

        list
    }
}
