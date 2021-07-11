1.Object.create()用于创建对象，并且可以置顶创建的新对象的原型属性。
2.参数1：let obj3 = Object.create(obj)；//obj3={} 且 obj3._proto_= obj;
3.参数2:对象，可选，为新创建的对象添加指定的属性值和对应的属性描述符（该传入对象的自有可枚举属性(即其自身定义的属性，而不是其原型链上的枚举属性)）。
o = Object.create(Object.prototype, {
  // foo会成为所创建对象的数据属性
  foo: {
    writable:true,
    configurable:true,
    value: "hello"
  },
  // bar会成为所创建对象的访问器属性
  bar: {
    configurable: false,
    get: function() { return 10 },
    set: function(value) {
      console.log("Setting `o.bar` to", value);
    }
  }
});

4.object.create()实现继承--寄生组合继承
function Parent(){}
Parent.prototype.hello=function(){console.log("hello")}

function Child(){
  Parent.call(this)
}
Child.prototype=Object.create(Parent.prototype);
Child.prototype.constructor = Child;

5.其他用法：
let o=null;
let o=Object.create(null);

let o={};
let o=Object.create(Object.prototype);

function Constrctor(){}
let o=new Constrctor();
let o=Object.create(Constrctor.prototype); // 但是无法执行Constrctor里的代码

// 创建一个以另一个空对象为原型,且拥有一个属性p的对象
o = Object.create({}, { p: { value: 42 } })
// 省略了的属性特性默认为false,所以属性p是不可写,不可枚举,不可配置的:
o.p = 24
o.p //42
o.q = 12
for (var prop in o) {
   console.log(prop)
}
//"q"
delete o.p  //false

//创建一个可写的,可枚举的,可配置的属性p
o2 = Object.create({}, {
  p: {
    value: 42,
    writable: true,
    enumerable: true,
    configurable: true
  }
});