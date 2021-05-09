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

console.log(join([1, 2, 3], ''))
// 正確回傳值：123
console.log(repeat('yoyo', 2))
