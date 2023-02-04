/**
 * Definition for singly-linked list.
 * 2323/2/4
 */
 function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
 }

/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
const removeElements = function (head, val) {
    let h = new ListNode(0, head);
    let f = h;
    while (h.next) {
        if (h.next.val === val) {
            // sb了，开始写成了=== ,一直死循环
            h.next = h.next.next;
        } else {
            h = h.next;
        }
    }
    return f.next;
};
