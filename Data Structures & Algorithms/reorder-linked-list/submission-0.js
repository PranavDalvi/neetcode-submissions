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
     * @return {void}
     */
    reorderList(head) {
        let reorderList = function(head) {
            if (!head || !head.next) return;
        }

        let slow = head;
        let fast = head;

        while (fast && fast.next){
            fast = fast.next.next;
            slow = slow.next;
        }
        let second = slow.next;
        slow.next = null;

        let curr = second;
        let prev = null;

        while (curr){
            let temp = curr.next;
            curr.next = prev;
            prev = curr;
            curr = temp;
        }

        second = prev;

        let first = head;
        while(second){
            let temp1 = first.next;
            let temp2 = second.next;

            first.next = second;
            second.next = temp1;

            first = temp1;
            second = temp2;
        }
    }
}
