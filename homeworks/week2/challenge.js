/* eslint-disable */
function search(arr, n) {
  let middle = Math.round((arr.length - 1) / 2)
  const times = Math.round((arr.length + 1) / 2)
  if (n === arr[0]) {
    return 0
  }

  for (let i = 0; i < times; i++) {
    if (n === arr[middle]) {
      return middle
    } else if (n > arr[middle]) {
      middle = Math.round((arr.length - 1 + middle) / 2);
    } else {
      middle = Math.round((middle) / 2);
    }
  }
  return -1
}

console.log(search([1, 3, 10, 14, 39], 14))
