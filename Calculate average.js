// Write a function which calculates the average of the numbers in a given array.
// Note: Empty arrays should return 0.
 function averageArry(array){
  if(array.length===0){
    return 0;
  }
  else{
    let sum=array.reduce((acc,n)=>acc+n)
    return sum/array.length
  }
 }
 console.log(averageArry([12,34,56,23,18,45]))