/*
Formas de declarar variables
-en linea ejemplo

let impuesto, salario, iva;
impuesto = "isr";
salario = 333;
iva = 16;
*/

/*
delcaracion individual
*/

let impuesto = "isr";
let salario = 333;
const iva = 16;

console.log(impuesto);
impuesto = 100;
console.log(impuesto);

function showNumbers(){
    for(let i =0; i < 5; i++)
    console.log("index", i);
}

showNumbers();

/*
TIPOS DE DATOS
    -Primitivos

    STRING
*/

let name = "laura";
console.log(name, typeof(name));

//    Number

let grade = 100;
console.log(grade, typeof(grade));

// Boolean
let isApproved = true;
console.log(isApproved, typeof(isApproved));

//Null
//SOLO LOS OBJETOS PUEDEN SER NULL DENTRO DE JS

/*
OPERADORES
     -Aritmeticos
*/

let a = 10;
let b = 7;
let result;

console.log(a + b);
console.log(a - b);
console.log(a / b);
console.log(a % b);

//console.log(a++);
//console.log(++a);

//console.log(a--);
console.log(--a);

//  -Operadores de asignación

let c = 10;
let d = 7;

c += d;
console.log(c);
c = 10;
d = 7;
c -= d;
console.log(c);
c = 10;
d = 7;

c *= d;
console.log(c);
c = 10;
d = 7;

c /= d;
console.log(c);
c = 10;
d = 7;

c %= d;
console.log(c);
c = 10;
d = 7;

//  -Operadores de comparación regresan resultado boolean

let e = 10;
let f = 7;
//operadores racionales
console.log(e > f);
console.log(e < f);
console.log(e >= f);
console.log(e <= f);
//operadores de igualdad
console.log(e == f);
console.log(e != f);
console.log(e === f);

let x = true;
let y = 1;

console.log(x === y);
console.log( x !== y);

//  -Operador ternario ?

let g = 10;
let h = 5;

let resultado = g > h ? "a es el mayor": "b es el mayor";

console.log(resultado);

//  -Operadores Matematicos ! not, || or, && and

let m = 10;
let k = 10;
let l = 8;

console.log((m===k) && (k===l));
console.log((m===k) || (k===l));
console.log( ! (m > l));