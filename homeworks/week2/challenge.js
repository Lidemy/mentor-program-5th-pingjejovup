function search(arr, n) {
  let middle = Math.round((arr.length - 1) / 2);
  var times = Math.round((arr.length + 1) / 2);
  console.log('midd', middle);
  console.log('rn', arr.indexOf(n));
  if (n == arr[0]) {
    return 0
  }

  for (let i = 0; i < times; i++) {
    if (n == arr[middle]) {
      return middle
    } else if (n > arr[middle]) {

      middle = Math.round((arr.length - 1 + middle) / 2);
      // console.log('b', middle);

    } else {
      middle = Math.round((middle) / 2);
      // console.log('s', middle);
    }
    
  }

  
  // return arr.indexOf(n)
  return -1
}


// 3
// console.log(search([1, 3, 10, 14, 39], 1));
// console.log(search([1, 3, 10, 14, 39], 3));
// console.log(search([1, 3, 10, 14, 39], 10));
// console.log(search([1, 3, 10, 14, 39], 14));
// console.log(search([1, 3, 10, 14, 39], 39));
// console.log(search([1, 3, 10, 14, 39], 45));

