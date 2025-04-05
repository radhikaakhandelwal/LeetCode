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
 * @return {TreeNode}
 */

// If we get same height/depth from both sides, great - current node is LCA and return LCA node, depth+1
// if either side depth is greater, the node of that side is LCA
// O(n) - iterate over the entire tree once

var lcaDeepestLeaves = function(root) {
    function dfs(node){
        if(!node) return [0,null]

        let [depthleft, childNodeLeft] = dfs(node.left)
        let [depthRight, childNodeRight] = dfs(node.right)

        if(depthleft === depthRight) return[depthleft + 1, node]

        if(depthleft > depthRight) return[depthleft + 1, childNodeLeft]
        if(depthleft < depthRight) return[depthRight + 1, childNodeRight]
    }
    return dfs(root)[1]
};
