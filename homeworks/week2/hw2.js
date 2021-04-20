function capitalize(str) {
  if(str){
    let strArray = str.split("");
    let firstChar = strArray[0];
    if (firstChar.match(/[a-z]/i)){
      firstChar = firstChar.toUpperCase();
      strArray.splice(0, 1, firstChar);      
      return strArray.join('');
    }else{
      return str
    }
  }
}

console.log(capitalize('hello'));
