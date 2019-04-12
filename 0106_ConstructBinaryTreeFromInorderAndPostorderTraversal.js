// Given inorder and postorder traversal of a tree, construct the binary tree.

// Note:
// You may assume that duplicates do not exist in the tree.

// For example, given

// inorder = [9,3,15,20,7]
// postorder = [9,15,7,20,3]
// Return the following binary tree:

//     3
//    / \
//   9  20
//     /  \
//    15   7


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
let buildTree = function(inorder, postorder) {
    if(inorder.length == 0) return null;
    let rootNode = new TreeNode(postorder[postorder.length - 1]); // postOrder Last Node is the Root Node; 3 is the root at the beginning
    let rootIndex = inorder.indexOf(rootNode.val); // get the root index of inorder; index = 1
    // root node is in between nodes of left subtree and nodes of right subtree;
    let leftInorder = inorder.slice(0, rootIndex); //[9]
    let rightInorder = inorder.slice(rootIndex + 1);//[15, 20, 7]
    // get the same count of each subtree from postorder
    let leftPostorder = postorder.slice(0, leftInorder.length); // [9]
    let rightPostorder = postorder.slice(leftInorder.length, postorder.length - 1); // [15, 7, 20]
    // if the length of subtree is 0, return null, or do the recursive; 
    if(leftInorder.length == 0){
        rootNode.left = null;
    }else{
        rootNode.left = buildTree(leftInorder, leftPostorder); // inorder:[9], postorder:[9] ;9 is the root
    }
    if(rightInorder.length == 0){
        rootNode.right = null;
    }else{
        rootNode.right = buildTree(rightInorder, rightPostorder); // inorder:[15, 20, 7], postorder: [15, 7, 20] 20 is the root node
    }
    return rootNode;
};

// inorder = [9,3,15,20,7]
// postorder = [9,15,7,20,3]
let inorder = [9,3,15,20,7];
let postorder = [9,15,7,20,3];


//output = true;
console.log(buildTree(inorder, postorder));