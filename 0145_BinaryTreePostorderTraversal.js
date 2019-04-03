// Given a binary tree, return the postorder traversal of its nodes' values.

// Example:

// Input: [1,null,2,3]
//    1
//     \
//      2
//     /
//    3

// Output: [3,2,1]
// Follow up: Recursive solution is trivial, could you do it iteratively?


// Post-order traversal is to traverse the left subtree first. 
// Then traverse the right subtree. 
// Finally, visit the root.

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
let postorderTraversal = function(root) {
    let result = [];

    const traverse = (root) => {
        if(!root) return;
        if(root.left) traverse(root.left);
        if(root.right) traverse(root.right);
        result.push(root.val);
    }
    traverse(root);

    return result;
};

//input = [1, null, 2, 3];
let tree = new TreeNode(1);
tree.left = null;
tree.right = new TreeNode(2);
tree.right.left = new TreeNode(3);

//output = [3, 2, 1];
console.log(postorderTraversal(tree));