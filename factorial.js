//  factorial

function factorial(number) {
    let fact = 1;
    for (let i = 1; i <= number; i++) {
        fact = fact * i;
    }
    return fact;

}
const giveNumber = factorial(5)
console.log(giveNumber);

// reverse in factorial
function fact(n) {
    let f = 1;
    for (i = n; i >= 1; i--) {
        f = f * i;
    }
    return f;
}
const inputNumber = fact(6)
console.log(inputNumber);