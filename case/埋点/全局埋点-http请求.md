一.核心：重写window.XRHttpRequest。
var xhr= new XMLHttpRequest(),
    method = "GET",
    url = "https://developer.mozilla.org/";

xhr.open(method, url, true);
xhr.onreadystatechange = function () {
  if(xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
    console.log(xhr.responseText)
  }
}
xhr.send();

二.具体实现
1.保存原有对象和方法
var oldXHR = window.XMLHttpRequest,
originSetHeader = window.XMLHttpRequest.prototype.setRequestHeader,
originOpen = window.XMLHttpRequest.prototype.open,
originSend = window.XMLHttpRequest.prototype.send;

2.setRequestHeader：设置 HTTP 请求头的值。必须在 open() 之后、send() 之前调用 setRequestHeader() 方法。
保存this._header

3.重写open:初始化一个请求
这里主要是为了保存url和method

4.重写send，XMLHttpRequest.send(body).发送请求。如果请求是异步的（默认），那么该方法将在请求发送后立即返回。
通过3保存的url过滤掉埋点上传的接口，添加一些业务参数并调用setRequestHeader

body 可选
在XHR请求中要发送的数据体. 可以是:
可以为 Document, 在这种情况下，它在发送之前被序列化.
为 XMLHttpRequestBodyInit, 从 per the Fetch spec （规范中）可以是 Blob, BufferSource (en-US), FormData, URLSearchParams, 或者 USVString 对象.
null
如果body没有指定值，则默认值为 null .

5.重写xhr回调
监听以下两个事件，记录开始时间和结束时间，在请求结束后进行数据整理，判断返回类型和状态码，如果错误的话在responsText提示，处理完并上传日志
loadend
当请求结束时触发, 无论请求成功 ( load) 还是失败 (abort 或 error)。
也可以使用 onloadend 属性。
loadstart
接收到响应数据时触发。
也可以使用 onloadstart 属性。
