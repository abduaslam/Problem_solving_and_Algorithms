
// Given a number n, calculate the sum of all numbers starting from 0 up to n.
function sumNumbers(n){
    let results=0
    for(let i=0;i<=n;i++){
        results=results+i
    }
    return results
}
console.log(sumNumbers(3))