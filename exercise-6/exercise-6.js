function convertNumber(number) {
  var s =""
  while(number > 0){
    s = (number%2) + s
    number = Math.floor(number/2)
  }
  return s
}


console.log(convertNumber(16))
