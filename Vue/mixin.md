vue混入可以提供向组件注入可复用功能的能力。vue混入可以提供向组件注入可复用功能的能力。
mixin的合并策略分为三种，分别是针对data数据对象，钩子函数和其他值为对象的选项（computed，watch，method）
1.针对data对象，在内部会进行递归合并，当出现同名属性时，优先取组件自身的数据。
2.混入钩子函数，重复的钩子函数会被放在一个数组中，并且优先调用mixin对象的。
3.其余两个对象键名冲突时，取组件对象的键值对。
Vue.extend() 也使用同样的策略进行合并。

使用
new Vue({
  myOption: 'hello!'
})
// => "hello!"
// 定义一个混入对象
var myMixin = {
  created: function () {
    this.hello()
  },
  methods: {
    hello: function () {
      console.log('hello from mixin!')
    }
  }
}
// 定义一个使用混入对象的组件
var Component = Vue.extend({
  mixins: [myMixin]
})
var component = new Component() // => "hello from mixin!"


//或者
var mixin = {
  created: function () {
    console.log('混入对象的钩子被调用')
  }
}

new Vue({
  mixins: [mixin],
  created: function () {
    console.log('组件钩子被调用')
  }
})

// => "混入对象的钩子被调用"
// => "组件钩子被调用"


可以全局注入，也可以局部注入。但全局注入会影响所有的组件，需谨慎。
// 为自定义的选项 'myOption' 注入一个处理器。
//通过this.$options来获取自定义选项
Vue.mixin({
  created: function () {
    var myOption = this.$options.myOption
    if (myOption) {
      console.log(myOption)
    }
  }
})
new Vue({
  myOption: 'hello!'
})
// => "hello!"
//也可以通过Vue.config.optionMergeStrategies为自定义选项myOption设置合并策略
Vue.config.optionMergeStrategies.myOption = function (toVal, fromVal) {
  // 返回合并后的值
}