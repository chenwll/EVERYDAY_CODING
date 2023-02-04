/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
    let pre = new ListNode(0,head);
    let tmp = pre;
    while(pre.next&&pre.next.next) {
        let cur = pre.next, ne = pre.next.next;
        cur.next = ne.next;
        pre.next = ne;
        ne.next = cur;
        pre = cur;
    }
    return tmp.next;
};
