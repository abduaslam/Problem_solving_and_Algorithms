// The function should iterate through all numbers from 1 to n, 
// check if each number is divisible by 2, and keep a count of the even numbers. 
// Finally, it should return the total count.
function countEvenNumbers(n) {
  let countevent=0;
  for(let i=0;i<n;i++){
    if(i%2==0){
        countevent +=1
    }
  }
  return countevent
}

console.log(countEvenNumbers(15));
