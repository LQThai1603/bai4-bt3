function reverseString(string) {
  if(!string) return;
  let a = string.split("");
  a.reverse();
  console.log(a.join(""));
}

//strign.split(" ").join("-")
reverseString("my name is");

