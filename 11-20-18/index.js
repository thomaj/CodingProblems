

/**
 * A Node which can have a value and up to two children.  Useful for building binary trees
 * 
 * @param {String} val the value for this root
 * @param {Node} left (optional) the left child node 
 * @param {Node} right (optional) the right child node 
 */
function Node (val, left, right) {
    this.val = val;
    this.left = left;
    this.right = right;
}


/**
 * Counts the number of unival trees in the given tree and returns the result
 * Runtime: Θ(n)
 * 
 * @param {Node} root the root of the binary tree
 * @returns {Number} the number of unival trees
 */
const univalTreeCount = function (root) {
    let numTrees = 0;
    if (root) {
        if (root.left) {
            let numberTreesLeft = univalTreeCount(root.left);
            numTrees += numberTreesLeft;
        }
        if (root.right) {
            let numberTreesRight = univalTreeCount(root.right);
            numTrees += numberTreesRight;
        }

        if ((root.left && !root.right && root.left.val == root.val) || 
                (root.right && !root.left && root.right.val == root.val) ||
                (root.left && root.right && root.left.val == root.val && root.right.val == root.val) ||
                (!root.left && !root.right)) {
            numTrees += 1;
        }
    }
    return numTrees;
}


module.exports = {
    Node,
    univalTreeCount
}