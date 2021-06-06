// New创建实例的步骤：
// 1. 创建一个新对象
// 2. 将新对象的[[prototype]]属性指向构造函数的原型对象
// 3. 将构造函数的this指向新对象
// 4. 执行构造函数内的代码
// 5. 如果构造函数返回一个对象，则返回这个对象；否则返回上面👆创建的对象
const _new = function (classFunc, ...args) {
  let targetObject = {};
  Object.setPrototypeOf(targetObject, classFunc.prototype);
  //var obj = Object.create(Constructor.prototype)；以上两句也可以换成这句
  let result = classFunc.call(targetObject, ...args);
  //
  if (Object.prototype.toString.call(result) == '[Object Object]') return result;
  return targetObject;
  //判断对象的方法，需要排除null和array
  //return Object.prototype.toString.call(result).match(/^\[object (\w+)\]$/)[1] === 'Object' ? result : obj;
  // if (result !== null && /^(object|function)$/.test(typeof result)) {
  //   return result;
  // }
}