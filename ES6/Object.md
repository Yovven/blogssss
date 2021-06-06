1.Object.is(a,b)
“Same-value equality”（同值相等）算法的实现。在所有环境中，只要两个值是一样的，它们就应该相等。
==比较会进行类型转换，===比较不进行类型转换，但是两个NaN不相等并且+0与-0相等。
Object.is(a,b)用来比较两个值是否严格相等，与严格比较运算符（===）的行为基本一致，除了NaN和+-0的比较。
ES5实现：
Object.defineProperty(Object, 'is', {
  value: function(x, y) {
    if (x === y) {
      // 针对+0 不等于 -0的情况
      return x !== 0 || 1 / x === 1 / y;
    }
    // 针对NaN的情况
    return x !== x && y !== y;
  },
  configurable: true,
  enumerable: false,
  writable: true
});


2.Object.assign(source,target....)
对象合并，但只会合并对象自身的可枚举属性，继承的属性不会被合并。当遇到重名属性时，后面的会覆盖前面的。
如果source是非对象类型，除了字符串会被转化为数组以外，其余不能转换成iterator接口的类型都会报错。
如果target是非对象类型，如果无法转换为对象，则会被忽略。
属性名为 Symbol 值的属性，也会被Object.assign()拷贝。


3.Object.create()
方法创建一个新对象，使用现有的对象来提供新创建的对象的__proto__。