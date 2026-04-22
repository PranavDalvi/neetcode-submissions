/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @return {ListNode}
     */
    reverseList(head) {
        let i = null;
        let j = head;
        while (j){
            let temp = j.next;
            j.next = i;
            i = j;
            j = temp;
        }
        return i
    }
}
