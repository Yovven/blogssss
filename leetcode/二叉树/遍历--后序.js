//左右根
//头插法
var qianxubianli = function (root) {
  if (root == null) return [];
  var res = [];
  var stack = [];
  stack.push(root);
  while (stack.length > 0) {
    let node = stack.pop();
    res.unshift(node.val);
    if (node.left) stack.push(node.left);
    if (node.right) stack.push(node.right);
  }
  return res;
}