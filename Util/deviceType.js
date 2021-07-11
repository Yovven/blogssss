deviceType = function () {
  var u = navigator.uaerAgent;
  if ((u.indexOf('Tablet') > -1 && u.indexOf('PC') < 0) || u.indexOf('Pad') > -1 || u.indexOf('Nexus 7') > -1) {
    return 'Tablet';
  }
  if (u.indexOf('Mobi') > -1 || u.indexOf('iPh') > -1 || u.indexOf('480') > -1) {
    return 'phone';
  }
  return 'desktop';
}