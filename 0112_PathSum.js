// Given a binary tree and a sum, determine if the tree has a root-to-leaf path such that adding up all the values along the path equals the given sum.

// Note: A leaf is a node with no children.

// Example:

// Given the below binary tree and sum = 22,

//       5
//      / \
//     4   8
//    /   / \
//   11  13  4
//  /  \      \
// 7    2      1
// return true, as there exist a root-to-leaf path 5->4->11->2 which sum is 22.

/**
 * Definition for a binary tree node.
 * 
 */

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var hasPathSum = function(root, sum) {
    if(!root) return false;
    if(!root.left && !root.right && root.val === sum) return true;
    return hasPathSum(root.left, sum - root.val) || hasPathSum(root.right, sum - root.val);
};

//input = [5, 4, 8, 11, null, 13, 4, 7, 2, null, null, null, 1];
let tree = new TreeNode(5);
tree.left = new TreeNode(4);
tree.right = new TreeNode(8);
tree.left.left = new TreeNode(11);
tree.left.right = null;
tree.left.left.left = new TreeNode(7);
tree.left.left.right = new TreeNode(2);
tree.right.left = new TreeNode(13);
tree.right.right = new TreeNode(4);
tree.right.left.right = null
tree.right.left.left = null
tree.right.right.right = new TreeNode(1);
tree.right.right.left = null;


//output = true;
console.log(hasPathSum(tree, 22));