const deepClone = function (target) {
  if (typeof target == 'object' && target !== null) {
    const cloneTarget = Array.isArray(target) ? [] : {};
    for (let [key, value] of target.entries()) {
      if (typeof key == 'object' && key !== null) {
        cloneTarget[key] = deepClone(target[key])
      } else {
        cloneTarget[key] = target[key]
      }
    }
    return cloneTarget
  }
  return target;
}


//考虑正则/日期和循环引用
const deepClone = function (target, map) {
  if (map.get(target)) {
    return target;
  }
  const constroctor = target.constroctor;
  if (/^(RegExp|Date)$/i.test(constroctor.name)) {
    return new constroctor(target)
  }
  if (typeof target == 'object' && target !== null) {
    const cloneTarget = Array.isArray(target) ? [] : {};
    for (let [key, value] of target.entries()) {
      if (typeof key == 'object' && key !== null) {
        cloneTarget[key] = deepClone(target[key])
      } else {
        cloneTarget[key] = target[key]
      }
    }
    return cloneTarget
  }
  return target;
}

const isObject = (target) => {
  return (typeof target === 'object' || typeof target == 'function') && target != null
}