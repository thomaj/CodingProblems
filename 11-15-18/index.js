

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
 * Serializes the binary tree to a string representation. The string will be in format:
 *          'value(leftSubTree)(rightSubTree)'
 * if a subtree is not present, '()' will be shown
 * ex) dog(cat()(hamster()()))()
 * 
 * @param {Node} node the root node of a binary tree to serialize
 * @returns {String} the string representation of the binary tree
 */
let serialize = function (node) {
    let rep = '';

    if (node) rep = `${node.val}(${serialize(node.left)})(${serialize(node.right)})`;

    return rep;
}


/**
 * Deserializes a valid binary tree string representation to a binary tree object.
 * 
 * @param {String} rep the valid string representation of the binary tree
 * @returns {Node} the root node of the binary tree
 */
let deserialize = function (rep) {

    let createNode = function() {
        let node;
        if (rep.length > 0 && rep[0] !== ')') {
            let valEndPos = rep.indexOf('(');
            let val = rep.substring(0, valEndPos);

            rep = rep.substring(valEndPos + 1);
            let leftTree = createNode();
            rep = rep.substring(2); // Remove ) and (
            let rightTree = createNode();
            rep = rep.substring(1); // Remove )
            
            node = new Node(val, leftTree, rightTree);

        }
        return node;
    }

    return createNode();
}


module.exports = {
    serialize,
    deserialize,
    Node
}