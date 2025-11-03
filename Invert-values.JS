// Given a set of numbers, return the additive inverse of each. 
// Each positive becomes negatives, 
// and the negatives become positives.

function invert(array) {
   return array.map(x=> -x);
}
console.log(invert([23,-45,-56,10]))