function countDs(string) {
  let aantal = 0;
  let letter = "D";
  let arreetje = letter.split("");
  for (let i=0; i<string.length; i++) {
    if (arreetje.indexOf(string[i]) > -1) {
      aantal = aantal + 1;
    }
  }
  return aantal;
};	
console.log(countDs("DDC"));




function countChar(string) {
  let aantal = 0;
  let letter = "k";
  let arr = letter.split("");
  for (let i=0; i<string.length; i++) {
    if (arr.indexOf(string[i]) > -1) {
      aantal = aantal + 1;
  }
}
  return aantal;
};	
console.log(countChar("kikker", "k"));

