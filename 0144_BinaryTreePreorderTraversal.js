// Given a binary tree, return the preorder traversal of its nodes' values.

// Example:

// Input: [1,null,2,3]
//    1
//     \
//      2
//     /
//    3

// Output: [1,2,3]
// Follow up: Recursive solution is trivial, could you do it iteratively?


// Pre-order traversal is to visit the root first.
// Then traverse the left subtree. 
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
let preorderTraversal = function(root) {
    if(!root) return[];
    let result = [];
    let stack = [root];
    
    while(stack.length){
        let node = stack.pop();
        result.push(node.val);
        if(node.right) stack.push(node.right);
        if(node.left) stack.push(node.left);
    }
    return result;
};

//input = [1, null, 2, 3];
let tree = new TreeNode(1);
tree.left = null;
tree.right = new TreeNode(2);
tree.right.left = new TreeNode(3);

//output = [1, 2, 3];
console.log(preorderTraversal(tree));