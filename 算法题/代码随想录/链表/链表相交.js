/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
/**
 a + b + c
 c + b + a
 当他们走完三个边的时候，一定是相等的，
 如果他们不相交，也会相等，只不过都是为null
 */
const getIntersectionNode = function (headA, headB) {
    let p = headA, q = headB;
    while (p !== q) {
        p = p ? p.next : headB;
        q = q ? q.next : headA;
    }
    return q;
};
