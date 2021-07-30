//根左右
var qianxubianli = function (root) {
  if (root == null) return [];
  var res = [];
  var stack = [];
  stack.push(root);
  while (stack.length > 0) {
    let node = stack.pop();
    res.push(node.val);
    if (node.right) stack.push(node.right);
    if (node.left) stack.push(node.left);
  }
  return res;
}