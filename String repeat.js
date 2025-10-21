
//Write a function that accepts a non-negative integer n and a string s as parameters,
//  and returns a string of s repeated exactly n times.
let str="";
function repeated(n,s){
    for(let i=0;i<n;i++){
       str=str+s
    }

    return str;
}
console.log(repeated(5,"helo  "))