// Write a function that checks if a number is even or odd and returns "Even" or "Odd" accordingly.

function evenOrOdd(number){
    if(number % 2 == 0){
        return "Even"
    }
    else{
        return "Odd"
    }
}
let ans = evenOrOdd(5)
console.log(ans)