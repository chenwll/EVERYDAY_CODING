/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function(head) {
    if(!head ||!head.next) return null;
    let dummy = new ListNode(0);
    dummy.next = head;
    let slow = dummy, fast = dummy;
    while(fast&&fast.next) {
        slow = slow.next;
        fast = fast.next.next;
        if(slow === fast) {
            slow = dummy;
            while(slow !== fast) {
                fast = fast.next;
                slow = slow.next;
            }
            return slow;
        }
    }
    return null;
};
