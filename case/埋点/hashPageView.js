function hashPageView() {
  var historyPushState = window.history.pushState;
  var historyReplaceState = window.history.replaceState;
  var performance = window.performance

  var curState = '';
  window.history.pushState = function () {
    lib.refferUrl = window.location.href;
    historyPushState.apply(window.history, arguments)
    curState = arguments[2]
    const marktime = (+new Date())
    performance.mark && performance.mark('sdkMarkStart' + marktime)
    pageViewInit({
      pageNo: srgument[2]
    }, marktime)
  }
  window.history.replaceState = function () {
    //t添加判断curState是不是和arguments[2]相等，相等说明是重复的跳转，不用上报两次
  }

  var historyMode = historyPushState ? 'popstate' : 'hashchange'
  historyMode = (!!window.ActiveXObject || 'ActiveXObject' in window) ? 'hashchange' : 'popstate';
  if (('on' + historyMode) in window) {
    window.addEventListener(historyMode, function (e) {
      setTimeout(() => {
        pageViewInit()
      }, 0)
    })
  }
}




function pageViewInit() {
  cosnt session_ = window.sessionStorage
  if (Text.getUUId() == void 0) Text.setUUID();
  if (session_.getItem('CMB_SESSION')) {
    LIB.curryPageNo = props && props.pageNo;
    track('PageLoad')
  } else {
    session_.setItem('SMB_SESSION', T.setSessionID())
    track('clientstart')
  }
  //记录跳转之前的performance
  if (lib, singlepage && markid) {
    performance.mark && domreadyobserve(markid)
  } else {

  }

}


T.setSessionID() = = function () {
  var e = +new Date()
  let sessionId = T.MD5('JS' + e.tostring() + Math.random(0, 1e7))
  return sessionId
}