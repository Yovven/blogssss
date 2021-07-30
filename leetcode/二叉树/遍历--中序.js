//先左，根，后右
//用栈,跟节点一直遍历左节点直到为null，弹出当前节点，再同样遍历右节点
var zhongxubianli = function (root) {
  if (root == null) return [];
  var res = [];
  var stack = [];
  while (root !== null || stack.length > 0) {
    while (root !== null) {
      stack.push(root);
      root = root.left;
    }

    root = stack.pop();
    res.push(root.val);
    root = root.right;
  }
  return res;
}