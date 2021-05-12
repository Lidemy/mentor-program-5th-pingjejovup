function reverse(str) {
  const strArray = str.split('');
  let newArray = [];
  strArray.forEach((e,i) => { 
    newArray.unshift(e)
   } )

  console.log(newArray.join(''));
}

reverse('hello');
reverse('yoyoyo')
//正確輸出：oyoyoy

reverse('1abc2')
// 正確輸出：2cba1

reverse('1,2,3,2,1')
// 正確輸出：1, 2, 3, 2, 1
