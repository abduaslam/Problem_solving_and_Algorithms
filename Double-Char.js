// Given a string, you have to return a string in which each
//  character (case-sensitive) is repeated once.

function doubleChar(str) {
 let strText= str.split("").map(x=>x+x).join("")
 strText =`'${strText}'`
  return strText
}
console.log(doubleChar("String"))