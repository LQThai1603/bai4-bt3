function leapYears(year) {
  
  switch(true){
    case year % 400 == 0:
      console.log("this year is leap year")
      break;
    case year % 4 == 0 && year % 100 != 0:
      console.log("this year is leap year")
      break;
    default:
      console.log("this year is not leap year")
      break;
  }
}

leapYears(1400)