
// Name Shuffler
// Write a function that returns a string in which firstname is 
// swapped with last name.
function swapp(str){
   return str.split(' ').reverse().join(" ")
}
 console.log(swapp("abdalsalm yagoub"))

 const sudent="Hello everybody how are doing"
  console.log(sudent.split(' ').reverse().join(" ").split(2,4))