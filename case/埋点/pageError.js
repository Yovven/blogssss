const pageErrorListener = function () {
  3
  //保存原有的error事件
  var orgError = window.onerror;
  //充血onerror
  window.onerror = function (msg, url, line, col, error, funcname) {
    var newMsg = msg;
    //msg格式化
    //过滤msg，1.跨域脚本问题报错，无法获取具体错误内容2，chrome插件也会兰姐报错
    //1.msg.indexof('script error')
    //2.msg.indexof('chrome-extension')

    track('pageerror', {})
    orgError && orgError.apply(window, arguments)
  }

  //资源加载错误
  document.addEventListener('error', function (error) {
    var target = error.target;
    if (target && target.getAttribute('notrack') !== null) {
      track('pageerror', {
        behavior: {
          errormsg: (target.src || target.href) + 'is not found',
          scripurl: (target.src || target.href),
          linenumber: 0,
          colnum: 0,
          errorobj: target.localName
        }
      })
    }
  }, true);
  //设置为true，表示捕获阶段调用，会在元素的onerror之前调用
  document.addEventListener('unhandlerejection', function (e) {
    othererror(e.reason)
  })
}

//未捕获或者框架错误对接到这
function othererror(error, vm) {
  let mainError = {
    fileName: 0,
    linenum: 0,
    colnums: 0,
    functionname: 0
  }

  const errorList = ErrorstackPaser.parse(error)
  mainError = errorList[0]

  window.onerror(error.message, mainError.fileName, mainError.linenum, mainError.colnums, error, mainError.functionname)

}