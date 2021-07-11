function debounce(func, wait) {
  let timeout;
  return function () {
    let context = this;
    let args = arguments;
    clearTimeout(timeout);
    timeout = setTimeout(function () {
      func.apply(context, args)
    }, wait)
  }
}


function throttle(func, wait) {
  var timeout = null;
  return function () {
    var context = this,
      args = arguments;
    if (timeout) return;
    timeout = setTimeout(function () {
      func.apply(context, args);
      timeout = null;
    }, wait)
  }


}

// function test() {
//   console.log('start')
//   setTimeout(() => {
//     console.log('children2')
//     Promise.resolve().then(() => {
//       console.log('children2-1')
//     })
//   }, 0)
//   setTimeout(() => {
//     console.log('children3')
//     Promise.resolve().then(() => {
//       console.log('children3-1')
//     })
//   }, 0)
//   Promise.resolve().then(() => {
//     console.log('children1')
//   })
//   console.log('end')
// }

// test()

setTimeout(() => console.log(1))

setImmediate(() => console.log(2))

process.nextTick(() => console.log(3))

Promise.resolve().then(() => console.log(4))

;
(() => console.log(5))()


let obj = {
  a: 1,
  b: {
    c: 1
  }
}

let obj2 = {...obj}
let obj3 = Object.create(obj)
let obj4 = Object.assign({},obj)


deepClone(target, map = new Map()) {
  if (typeof target == 'object') {
    let cloneTarget = Array.isArray(target) ? [] : {};
    if (map.has(target)) {
      return map.get(target);
    }
    map.set(target, cloneTarget);
    for (let key of cloneTarget.keys()) {
      cloneTarget[key] = deepClone(target[key], map);
      return cloneTarget;
    }
  } else {
    return target;
  }
}