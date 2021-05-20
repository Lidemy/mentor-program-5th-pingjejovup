function reverse(str) {
  const strArray = str.split('')
  const newArray = []
  strArray.forEach((e) => { newArray.unshift(e) })
  return newArray.join('')
}

console.log(reverse('yoyoyo'))
