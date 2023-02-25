/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
const isCompleteTree = function (root) {
    if (!root) return false;
    let queue = [root];
    let flag = false;
    while (queue.length) {
        let node = queue.shift();
        // 如果出现了空节点之后还有节点，就不会完全二叉树
        if (!node) {
            flag = true;
        } else {
            if (flag) return false;
            queue.push(node.left);
            queue.push(node.right);
        }
    }
    return true;
};
