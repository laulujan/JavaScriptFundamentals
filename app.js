function fizzBuzz(num){
    if (num%3 ===0 && num%5 === 0){
        alert("FizzBuzz");
    }else if (num %3 === 0){
        alert ("Fizz");
    }else if (num %5 === 0){
        alert ("Buzz");
    } else if ( typeof(num) !== "number"){
        alert ("not a number");
    } else {
        alert("input");
    }
 }
 fizzBuzz(7);

 let x = prompt("value");
 console.log(typeof(x));