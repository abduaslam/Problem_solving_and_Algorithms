function sumPositve(arr){
    return arr
    .filter(p=>p>0)
    .reduce((sum,n)=>sum+n,0)
}
console.log(sumPositve([12,-4,9,-10,1]))