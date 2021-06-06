const instanceofFun = function (instance, construct) {
  if (instance == null || typeof instance !== 'object') return false;
  const constructProto = construct.prototype;
  let instanceProto = Object.getPrototypeOf(instance);
  while (instanceProto != null) {
    if (instanceProto == constructProto) return true;
    instanceProto = Object.getPrototypeOf(instanceProto)
    console.log(instanceProto)
  }
  return false;
}