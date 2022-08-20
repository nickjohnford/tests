// seems the exported testFunc can access extraFunc
function extraFunc() {
  return 'extra func';
}

function testFunc() {
  return 'this is testFunc and this is ' + extraFunc();
}

export {testFunc}
