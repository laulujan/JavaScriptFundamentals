// Landscape or Portrait
let width = 0;
let height = 0;

function isLandsCape(width, height){
    if (width > height) {
        console.log("is landscape")
    }else{
        (console.log("is portrait"))
    }
}

isLandsCape(200,50);

// FizzBuzz algoritmo
/**
 * Divisible entre 3 => Fizz
 * Divisible entre 5 => Buzz
 * Divisible entre 3 y 5 => FizzBuzz
 * No ivisible entre 3 o 5 => input
 * No es un numero => 'Not es un numero'
 * 
 */

 function fizzBuzz(numero){
    let num = prompt("ingresa un numero");
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
 fizzBuzz();

 //*************CORRECT********************
 function fizzBuzz(num){
    if  ( typeof(num) !== "number"){
        alert ("not a number");
    } else if (num%3 ===0 && num%5 === 0){
        alert("FizzBuzz");
    }else if (num %3 === 0){
        alert ("Fizz");
    }else if (num %5 === 0){
        alert ("Buzz");
    } else {
        alert("input");
    }
 }
 fizzBuzz(7);
//************************************************** */

 // limite de velocidad
 /**
  * Limite de velocidad = 70
  * 5 -> 1 point
  * Math.Floor
  * 12 point -> licencia suspendida
  */
function speedLimit (speed){
    if(speed <= 70){
        console.log("ok");
        return;
    }

    let x = Math.floor((speed-70)/5);
    console.log("you got ", x ," points");

    if (x >= 12) {
        console.log("licencia suspendida")
    }

}
speedLimit(200);


  // Par or non
  /**
   * Funcion que reciba un numero e imprima desde 0 
   * hasta el numero dado y espacifique sies par o non
   * example: n = 3
   * 0 par
   * 1 non
   * 2 par
   * 3 non
   */

   function isOdd (n){
       if(n % 2 === 0){
           console.log("this number is even");
       }else{
           console.log("this numer is odd")
       }
   }
   isOdd(21);

   // Suma de multiplos de 3  y 5
   /**
    *  sum(10)
    *  3 -> 3, 6, 9
    *  5 -> 5, 10
    *  sum(10) = 33
    */

    var suma = 0;

    function sumaMultiplos (num) {
        for (let i = 1; i<=num; i++) {
            if(( i % 3 === 0)||(i % 5 === 0)){
                suma += i;
            }
        }
        console.log(suma);
    }
    sumaMultiplos(10);

    // Show the stars

    // Print Primes  
    // El de los imprimir los números consiste en una función que recibe un número como parámetro 
    // y te imprime todos los números primos que existen dentro de ese número.

    function primeNumbers(num){
        for (let i = 1; i < num; i++){
            //declaro una variable para saber si el numero a comparar solo es divisible entre el mismo y 1
            let divisible = 0;
           for (let j = 1; j < num; j++){ 
            if (i % j == 0){
                //si el numero es divisible entre 1 y algun otro numero se suma a variable divisible
                divisible++;
            } 
           }
           // me quedo con los numeros que solo son divisibles entre dos numeros
           if (divisible === 2){
            console.log(i);
           } 
        } 
    }
    primeNumbers(10);



 