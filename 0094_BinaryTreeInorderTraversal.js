// Given a binary tree, return the inorder traversal of its nodes' values.

// Example:

// Input: [1,null,2,3]
//    1
//     \
//      2
//     /
//    3

// Output: [1,3,2]
// Follow up: Recursive solution is trivial, could you do it iteratively?


// In-order traversal is to traverse the left subtree first. 
// Then visit the root. 
// Finally, traverse the right subtree.


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
let inorderTraversal = function(root) {
    let result = [];
    let stack = [];

    while(root || stack.length){
        if(root){
            stack.push(root);
            root = root.left;
        } else {
            root = stack.pop();
            result.push(root.val);
            root = root.right;
        }
    }

    return result;
};

//input = [1, null, 2, 3];
let tree = new TreeNode(1);
tree.left = null;
tree.right = new TreeNode(2);
tree.right.left = new TreeNode(3);

//output = [1, 3, 2];
console.log(inorderTraversal(tree));