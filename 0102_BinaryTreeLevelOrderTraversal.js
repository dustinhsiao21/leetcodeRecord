// Given a binary tree, return the level order traversal of its nodes' values. (ie, from left to right, level by level).

// For example:
// Given binary tree [3,9,20,null,null,15,7],
//     3
//    / \
//   9  20
//     /  \
//    15   7
// return its level order traversal as:
// [
//   [3],
//   [9,20],
//   [15,7]
// ]


// Level-order traversal is to traverse the tree level by level.
// Breadth-First Search is an algorithm to traverse or search in data structures like a tree or a graph. 
// The algorithm starts with a root node and visit the node itself first. 
// Then traverse its neighbors, traverse its second level neighbors, 
// traverse its third level neighbors, so on and so forth.


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
var levelOrder = function(root) {
    if(!root) return [];
    let result = [];
    let stack = [root];
    let level = 0;

    while(stack.length){
        let temp = stack.slice();
        result[level] = [];
        stack = [];
        while(temp.length){
            let node = temp.shift();
            if(node){
                result[level].push(node.val);
                if(node.left) stack.push(node.left);
                if(node.right) stack.push(node.right);   
            }
        }
        level++;
    }
    return result;
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
console.log(levelOrder(tree));