// Merge two sorted linked lists and return it as a new list.
// The new list should be made by splicing together the nodes of the first two lists.

// Example:

// Input: 1->2->4, 1->3->4
// Output: 1->1->2->3->4->4

/**
 * Definition for singly-linked list.
 */
function ListNode(val) {
    this.val = val;
    this.next = null;
}
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
    if(!l1 || !l2){
        return l1 || l2;
    }
    if(l1.val > l2.val){
        [l1, l2] = [l2 ,l1];
    }
    l1.next = mergeTwoLists(l1.next, l2);
    
    return l1
};

//input
let l1 = new ListNode(1);
l1.next = new ListNode(2);
l1.next.next = new ListNode(4);

let l2 = new ListNode(1);
l2.next = new ListNode(3);
l2.next.next = new ListNode(4);

//output  1->1->2->3->4->4
console.log(mergeTwoLists(l1, l2));