// Given a binary tree, check whether it is a mirror of itself (ie, symmetric around its center).

// For example, this binary tree [1,2,2,3,4,4,3] is symmetric:

//     1
//    / \
//   2   2
//  / \ / \
// 3  4 4  3
// But the following [1,2,2,null,3,null,3] is not:
//     1
//    / \
//   2   2
//    \   \
//    3    3
// Note:
// Bonus points if you could solve it both recursively and iteratively.



/**
 * Definition for a binary tree node.
 * 
 */

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

// recursively
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function(root) {
    if(!root) return true;
    var isSym = (node1, node2) => {
        if(!node1 && !node2) return true;
        if(!node1 || !node2 || node1.val !== node2.val) return false;
        return isSym(node1.left, node2.right) && isSym(node1.right, node2.left);
    }
    
    return isSym(root.left, root.right);
};

// iteratively
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric2 = function(root) {
    if(!root) return true;
    var isSym2 = (left, right) => {
        let node1 = [left];
        let node2 = [right];

        while(node1.length > 0 || node2.length > 0){
            let n1 = node1.pop();
            let n2 = node2.pop();

            if(!n1 && !n2) continue;
            //if mismatch , return false
            if(!n1 || !n2 || n1.val !== n2.val) return false;

            node1.push(n1.left);
            node1.push(n1.right);

            node2.push(n2.right);
            node2.push(n2.left);
        }

        return true;
    }

    return isSym2(root.left, root.right);
};


//input = [1, 2, 2, 3, 4, 4, 3];
let tree = new TreeNode(1);
tree.left = new TreeNode(2);
tree.right = new TreeNode(2);
tree.left.left = new TreeNode(3);
tree.left.right = new TreeNode(4);
tree.right.left = new TreeNode(4);
tree.right.right = new TreeNode(3);

//input2 = [1, 2, 2, null, 3, null, 3];
let tree2 = new TreeNode(1);
tree2.left = new TreeNode(2);
tree2.right = new TreeNode(2);
tree2.left.left = null;
tree2.left.right = new TreeNode(3);
tree2.right.left = null;
tree2.right.right = new TreeNode(3);

//output = true, false, true, false;
console.log(isSymmetric(tree));
console.log(isSymmetric(tree2));
console.log(isSymmetric2(tree));
console.log(isSymmetric2(tree2));