// Given a binary tree, find its maximum depth.

// The maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

// Note: A leaf is a node with no children.

// Example:

// Given binary tree [3,9,20,null,null,15,7],

//     3
//    / \
//   9  20
//     /  \
//    15   7
// return its depth = 3.

// "Top-down" means that in each recursion level, 
// we will visit the node first to come up with some values, 
// and pass these values to its children when calling the function recursively. 
// So the "top-down" solution can be considered as kind of preorder traversal.

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
 * @return {number[][]}
 */
var maxDepth = function(root, depth = 1) {
    if(!root) return 0;
    if(!root.left && !root.right) return depth;
    return Math.max(maxDepth(root.left, depth+1), maxDepth(root.right, depth+1));
};


//input = [3, 9, 20, null, null, 15, 7];
let tree = new TreeNode(3);
tree.left = new TreeNode(9);
tree.left.left = null;
tree.left.right = null;
tree.right = new TreeNode(20);
tree.right.left = new TreeNode(15);
tree.right.right = new TreeNode(7);

//output = [[3], [9, 20], [15, 7]];
console.log(maxDepth(tree));