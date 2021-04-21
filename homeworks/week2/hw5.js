function join(arr, concatStr) {
  let res = ''
  arr.forEach((element,i) => {
    if(i != 0){
      res += concatStr
    }
    res += element
  });
  return res;
}

function repeat(str, times) {
  let res = ''

  for (let i = 0; i < times; i++) {
    res += str
  }
  return res;
  
}

console.log(join(['a'], '!'));
console.log(join([1, 2, 3], ''));
// 正確回傳值：123
console.log(join(["a", "b", "c"], "!"));
// 正確回傳值：a!b!c
console.log(join(["a", 1, "b", 2, "c", 3], ','));
// 正確回傳值：a, 1, b, 2, c, 3

console.log(repeat('a', 5));
console.log(repeat('yoyo', 2));
