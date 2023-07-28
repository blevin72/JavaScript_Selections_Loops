// // Exercise 1 Section
console.log("Exercise 1")
for(let x = 1; x <= 100; x++){
    if(x % 2 != 0){
        console.log(x);
    }
}

// // Exercise 2 Section
console.log("Exercise 2")
for(let x = 1; x <= 100; x++){
    if(x % 3 == 0 && x % 5 == 0){
        console.log("FIZZBUZZ");
    }
    else if(x % 3 == 0){
        console.log("FIZZ");
    }
    else if(x % 5 == 0){
        console.log("BUZZ");
    }
}

// //Exercise 3 Section (Part A)
console.log("Exercise 3 A")
//For exercise 3, repeat both exercise 1 and 2 as `while` and `do/while` loop solutions.
let y = 1;
while(y <= 100){
    if(y % 2 != 0){
        console.log(y);
    }
    y++;
}

// //Exercise 3 Section (Part B)
console.log("Exercise 3 B")
let z = 1;
do{
    if(z % 3 == 0 && z % 5 == 0){
        console.log("FIZZBUZZ");
    }
    else if(z % 3 == 0){
        console.log("FIZZ");
    }
    else if(z % 5 == 0){
        console.log("BUZZ");
    }
    z++;
}while (z <= 100);

// //Exercise 4 Section
console.log("Exercise 4")
let value = Math.round((Math.random() * 500));
let n = Math.round(Math.random() * (500 - 100) + 100);

for(let i = 0; i <= n; i++){
    if(i == n){
        console.log("Found value!");
        break;
    }
    else{
        console.log("Did not find value");
    }
}

// //Exercise 5 Section
console.log("Exercise 5")
let fizzDivisor = Math.round(Math.random() * (10 - 1) + 1);
let buzzDivisor = Math.round(Math.random() * (10 - 1) + 1);
n = Math.round(Math.random() * (1000 - 1) + 1);
let start = Math.round(Math.random() * (10 - 1) + 1);

// // Re-implement exercise 2, but use `start` as the initial value for `i`, `n` as the range 
// //limit in `i <= n`, and `fizzDivisor` and `buzzDivisor` as the dependent values for 
// //determining "FIZZ" and "BUZZ" print messages.

let i = start;
do{
    if(i % fizzDivisor == 0 && i % buzzDivisor == 0){
        console.log("FIZZBUZZ");
    }
    else if(i % fizzDivisor == 0){
        console.log("FIZZ");
    }
    else if(i % buzzDivisor == 0){
        console.log("BUZZ");
    }
    i++;
}while (i <= n);