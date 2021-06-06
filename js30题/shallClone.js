const shallClone = function (target) {
  if (typeof target == 'object' && target !== null) {
    const cloneTarget = Array.isArray(target) ? [] : {};
    // for (prop in target) { //遍历自身或⭕️上的枚举的属性
    //   if (target.hasOwnProperty(prop)) {
    //     //排除掉原型上的属性，只保留对象实例本身的
    //     cloneTarget[prop] = target[prop]
    //   }
    // }
    //优化版本object.entries()直接遍历对象自身的可枚举属性
    for (let [key, value] of target.entries()) {
      cloneTarget[prop] = target[prop]
    }
    return cloneTarget
  }
  return target;
}