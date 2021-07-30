//用队列进行遍历，先进先出
var cengxubianli = function () {
  let res = [];
  let queue = [];
  queue.push(root)
  while (queue.length > 0) {
    let n = queue.length;
    let temp = [];
    for (let i = 0; i < n; i++) {
      let node = queue.shift();
      temp.push(node.val);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    res.push(temp);
  }
  return res;
}