Class Complier {
  constructor() {
    //webpack配置
    const {
      entry,
      output
    } = options
    // 入口
    this.entry = entry
    // 出口
    this.output = output
    // 模块
    this.modules = []

  }

  //构建启动
  run() {

  }

  //重写require函数，输出bundle
  generate() {

  }

}