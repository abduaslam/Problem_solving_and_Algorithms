// Drink about
// Make a function that receive age, and return what they drink.
// Rules:
// Children under 14 old.
// Teens under 18 old.
// Young under 21 old.
// Adults have 21 or more.

function peopleWithAgeDrink(old) {
if(old<14){
    return "Kids drink toddy"
}
else if(old<18 ){
    return "Teens drink coke"
}
else if(old<21){
    return "Young adults drink beer"
}
else if(old>21){
    return("Adults drink whisky")
}

 
};

console.log( peopleWithAgeDrink(13))
console.log( peopleWithAgeDrink(17))
console.log( peopleWithAgeDrink(18))
console.log( peopleWithAgeDrink(20))
console.log( peopleWithAgeDrink(30))