/* eslint-disable */
function join(arr, concatStr) {
  let res = ''
  arr.forEach((element, i) => {
    if (i !== 0) {
      res += concatStr
    }
    res += element
  })
  return res
}

function repeat(str, times) {
  let res = ''
  for (let i = 0; i < times; i++) {
    res += str
  }
  return res
}

console.log(join(['a'], '!'));
console.log(repeat('a', 5));
