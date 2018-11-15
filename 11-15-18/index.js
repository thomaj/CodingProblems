

function Node (val, left, right) {
    this.val = val;
    this.left = left;
    this.right = right;
}

// 2(4()(3()()))()
let serialize = function (node) {
    let rep = '';

    if (node) {
        rep = `${node.val}(${serialize(node.left)})(${serialize(node.right)})`
    }

    return rep;
}

module.exports = {
    serialize,
    Node
}